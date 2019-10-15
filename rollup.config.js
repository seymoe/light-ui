import filterPackages from '@lerna/filter-packages'
import { getPackages } from '@lerna/project'
import path from 'path'
import minimist from 'minimist'
import typescript from 'rollup-plugin-typescript2'
import resolve from 'rollup-plugin-node-resolve'
import postcss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'

// Get a list of the non-private sorted packages with Lerna v3
async function getSortedPackages() {
  // Support --scope and --ignore globs
  const { scope, ignore } = minimist(process.argv.slice(2))
  console.log('SCOPE IGNORE ->', scope, ignore)
  // Standard Lerna plumbing getting packages
  const packages = await getPackages(__dirname)
  const filtered = filterPackages(
    packages,
    scope,
    ignore,
    false
  )

  return filtered
}

async function main() {
  const plugins = [
    resolve(),
    commonjs(),
    postcss({
      extract: true,
      extensions: ['.scss']
    }),
    typescript({
      tsconfig: 'tsconfig.json'
    })
  ]
  const sourcemap = true
  const packages = await getSortedPackages()
  const results = []
  packages.forEach((pkg) => {
    const { name, main, module, version, author } = pkg.toJSON()
    // exp: packages/button
    const basePath = path.relative(__dirname, pkg.location)
    const input = path.join(basePath, `src/index.ts`)
    const banner = `${'/*!\n'
    + ' * '}${name}.js v${version}\n`
    + ` * (c) ${new Date().getFullYear()} ${author}\n`
    + ' * Released under the MIT License.\n'
    + ' */'
    // Generate the externals to use, by default don't include dependencies
    const baseExternal = ['react', 'react-dom']
    const external = [].concat(baseExternal, Object.keys(pkg.dependencies || []))
    // cjs format output
    const mainOutput = {
      name,
      file: path.join(basePath, main),
      format: 'cjs',
      sourcemap,
      banner
    }
    // ES format output
    const moduleOutput = {
      name,
      file: path.join(basePath, module),
      format: 'esm',
      sourcemap,
      banner
    }
    results.push({
      input,
      output: [
        mainOutput,
        moduleOutput
      ],
      external,
      plugins
    })
  })

  return results
}

export default main()