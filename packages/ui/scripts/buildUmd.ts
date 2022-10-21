import { build } from 'vite'

export function compileUMD() {
  return new Promise<void>((resolve, reject) => {
    const config = {}

    build(config)
      .then(() => resolve())
      .catch(reject)
  })
}
