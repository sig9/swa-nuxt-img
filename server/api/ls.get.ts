import { fileURLToPath } from 'url'
import * as path from 'path'
import * as fs from 'fs'

export default defineEventHandler((event): { errormsg: string, filename: string, dirname: string, tree: string, errors: any[] } => {
  let errors = []
  let tree = ''
  let errormsg = ''
  try {
    const treeData = lstree('/home') // lstree(path.dirname(fileURLToPath(new URL(import.meta.url))))
    errors = treeData.errors
    tree = treeData.treeString
  } catch (error) {
    errormsg = JSON.stringify(error)
  }

  const filename = fileURLToPath(new URL(import.meta.url))
  const dirname = path.dirname(fileURLToPath(new URL(import.meta.url)))
  return {
    errormsg,
    filename,
    dirname,
    tree,
    errors,
  }
})

function lstree(dir: string, indent = '', stringBuffer: string[] = [], errors: any[] = []) {
  try {
    const files = fs.readdirSync(dir)
    files.forEach((file) => {
      const filePath = path.join(dir, file)
      let isDirectory = false

      try {
        isDirectory = fs.statSync(filePath).isDirectory()
      } catch (err) {
        errors.push({ path: filePath, message: JSON.stringify(err) })
      }

      stringBuffer.push(indent + file + '\n')

      if (isDirectory) {
        lstree(filePath, indent + ' ', stringBuffer, errors)
      }
    })
  } catch (err) {
    errors.push({ path: dir, message: JSON.stringify(err) })
  }

  return { treeString: stringBuffer.join(''), errors }
}
