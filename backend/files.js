import { writeFile, readFile } from 'node:fs/promises'

const users = [
  { name: 'Unwana Udo', age: 43, email: 'unwana.udo@flo-dojo.com' },
]

// Convert to JSON and write to file
async function saveInitialUsers() {
  try {
    const userJSON = JSON.stringify(users)
    await writeFile('users.json', userJSON)
    console.log('Users have been saved to users.json')
  } catch (err) {
    console.error('Error writing users to file:', err)
  }
}

// Read modify and save users
async function addUser() {
  try {
    console.log('Adding a new user...')
    // Read the file
    const savedJsonUsers = await readFile('users.json', 'utf-8')
    const savedUsers = JSON.parse(savedJsonUsers)
    console.log('Exisiting users:', savedUsers)

    // Add a new user
    const newUser = {
      name: 'Judy Udo',
      age: 41,
      email: 'judy.udo@flo-dojo.com',
    }
    savedUsers.push(newUser)
    console.log('Updated users:', savedUsers)

    // Write the new users to the file
    const newUsersJSON = JSON.stringify(savedUsers)
    await writeFile('users.json', newUsersJSON)
    console.log('New user has been added to users.json')
  } catch (err) {
    console.error('Error writing users to file:', err)
  }
}

// Call the function
async function main() {
  await saveInitialUsers()
  await addUser()
}

main()

console.log('New user has been added to users.json')
