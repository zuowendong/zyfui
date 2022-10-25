import { build } from 'vite'

export function compileUMD() {
  return new Promise((resolve, reject) => {
    const config = {}

    build(config)
      .then(() => resolve())
      .catch(reject)
  })
}
