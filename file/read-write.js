const fs = require('fs/promises')
const fileName = '../base/main.cjs'

// ;(async (fileName) => {
//    const file = await fs.readFile(fileName, 'utf8')
//    await fs.mkdir('./temp', {recursive: true})
//    await fs.writeFile('./temp/temp.js', `${file} console.log('Hello world')`)
// })(fileName)




//Async
// const movedFile = async (fileName) => {
//    const file = await fs.readFile(fileName, 'utf8')
//    await fs.mkdir('./temp', {recursive: true})
//    await fs.writeFile('./temp/temp.js', `${file} console.log('Hello world')`)
// }

// movedFile(fileName).then(()=> console.log("Done"))


