import { dirname, resolve } from 'path'
import { promises as fs } from 'fs'
import cpy from 'cpy'
import fg from 'fast-glob'
import less from 'less'
import { ES_DIR, LIB_DIR, SRC_DIR } from './tools'

export const bundleLess = async() => {
  await cpy(`${SRC_DIR}/**/*.less`, ES_DIR) // 将src下less文件拷贝到es相同目录下
  await cpy(`${SRC_DIR}/**/*.less`, LIB_DIR)

  // 找到所有的less文件
  const lessFiles = await fg('**/*.less', {
    cwd: SRC_DIR,
    onlyFiles: true,
  })
  console.log(1111111111, lessFiles)

  for (const lessFile of lessFiles) {
    const filePath = `${SRC_DIR}/${lessFile}`
    console.log(333333333, filePath)
    const lessFileContent = await fs.readFile(filePath, 'utf8')
    console.log(444444444, lessFileContent)
    const code = await less.render(lessFileContent, {
      paths: [SRC_DIR, dirname(filePath)],
    })
    console.log(22222, code)
    await fs.writeFile(resolve(ES_DIR, lessFile.replace('.less', '.css')), code.css)
    await fs.writeFile(resolve(LIB_DIR, lessFile.replace('.less', '.css')), code.css)
  }
}

bundleLess()
