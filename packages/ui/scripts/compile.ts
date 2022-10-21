import ora from 'ora'
import type { InlineConfig } from 'vite'
// import { copyFileSync, pathExistsSync, readFileSync, removeSync, writeFileSync } from 'fs-extra'
import { build } from 'vite'
import vue from '@vitejs/plugin-vue'
import { logger } from './tools'
import { removeDir } from './removeBundle'

export const runTask = async(taskName: string, taskFun: () => any) => {
  const spinner = ora().start(`Compiling ${taskName}...`)
  try {
    await taskFun()
    spinner.succeed(`${taskName} completed!`)
  }
  catch (e: any) {
    spinner.fail(`${taskName} failed!`)
    logger.error(e.toString())
  }
}

function getUMDConfig(): InlineConfig {
  return {
    build: {
      outDir: 'dist',
      emptyOutDir: false,
      minify: true,
      rollupOptions: {
        external: ['vue', '@zyf/utils'],
        output: {
          exports: 'named',
          globals: {
            'vue': 'Vue',
            '@zyf/utils': 'zyfUtils',
          },
        },
      },
      lib: {
        entry: 'src/index.ts',
        formats: ['umd'],
        fileName: 'zyfui-umd',
        name: 'zyfui',
      },
    },

    plugins: [vue()],
    // plugins: [inlineCSS('zyfui', 'dist'), clear()],
  }
}

// function clear(): PluginOption {
//   return {
//     name: 'varlet-clear-vite-plugin',
//     apply: 'build',
//     closeBundle() {
//       removeSync(resolve(process.cwd(), 'dist'))
//     },
//   }
// }

// function inlineCSS(fileName: string, dir: string): PluginOption {
//   return {
//     name: 'varlet-inline-css-vite-plugin',
//     apply: 'build',
//     closeBundle() {
//       const cssFile = resolve(dir, 'style.css')
//       if (!pathExistsSync(cssFile))
//         return

//       const jsFile = resolve(dir, fileName)
//       const cssCode = readFileSync(cssFile, 'utf-8')
//       const jsCode = readFileSync(jsFile, 'utf-8')
//       const injectCode = `;(function(){var style=document.createElement('style');style.type='text/css';\
// style.rel='stylesheet';style.appendChild(document.createTextNode(\`${cssCode.replace(/\\/g, '\\\\')}\`));\
// var head=document.querySelector('head');head.appendChild(style)})();`
//       writeFileSync(jsFile, `${injectCode}${jsCode}`)
//       copyFileSync(cssFile, resolve(LIB_DIR, 'style.css'))
//       removeSync(cssFile)
//     },
//   }
// }

export function compileUMD() {
  return new Promise<void>((resolve, reject) => {
    build(getUMDConfig())
      .then(() => resolve())
      .catch(reject)
  })
}

export const compile = async() => {
  await runTask('clear', removeDir)
  await runTask('module', compileUMD)
}

compile()
