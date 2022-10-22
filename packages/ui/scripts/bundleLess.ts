import { dirname, resolve } from 'path'
import { promises as fs } from 'fs'
import { remove } from 'fs-extra'
import cpy from 'cpy'
import fg from 'fast-glob'
import less from 'less'
import { ES_DIR, LIB_DIR, SRC_DIR } from './tools'

export const bundleLess = async() => {
  await cpy(`${SRC_DIR}/**/*.less`, ES_DIR) // 将src下less文件拷贝到es相同目录下
  await cpy(`${SRC_DIR}/**/*.less`, LIB_DIR)

  // 找到所有的less文件
  const lessFiles = await fg('**/*.less', { cwd: SRC_DIR, onlyFiles: true })
  for (const lessFile of lessFiles) {
    const filePath = `${SRC_DIR}/${lessFile}`
    const lessFileContent = await fs.readFile(filePath, 'utf8')
    const code = await less.render(lessFileContent, {
      paths: [SRC_DIR, dirname(filePath)],
    })
    await fs.writeFile(resolve(ES_DIR, lessFile.replace('.less', '.css')), code.css)
    await fs.writeFile(resolve(LIB_DIR, lessFile.replace('.less', '.css')), code.css)
    // 删除less
    await Promise.all([remove(`${ES_DIR}/${lessFile}`), remove(`${LIB_DIR}/${lessFile}`)])
  }
}

bundleLess()
