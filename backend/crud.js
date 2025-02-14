import { writeFile, access, readFile } from 'node:fs/promises'
import { constants } from 'node:fs/promises'

const file = 'users.json'

// Check if the file exists
const createFile = async (data) => {
  try {
    await access(file, constants.F_OK)
    console.log('File exists, no action taken')
  } catch (error) {
    console.log('File does not exist, creating file...')
    try {
      await writeFile(file, data, 'utf-8')
      console.log('File created successfully')
    } catch (writeerror) {
      console.error('Error writing to file:', writeerror)
    }
  }
}

/**
 * Read file contents
 */

const readFileContents = async () => {
  try {
    const data = await readFile(file, 'utf-8')
    const textData = JSON.parse(data)
    console.log('File contents:', textData)
  } catch (error) {
    console.error('Error reading file:', error.message)
  }
}

createFile('[]')
readFileContents()
