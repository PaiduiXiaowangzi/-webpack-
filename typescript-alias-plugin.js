const path = require('path');
const fs = require('fs');

class TypescriptAliasPlugin {
    constructor(tsconfigPath) {
        this.tsconfigPath = tsconfigPath || 'tsconfigPath'
    }
    apply(compiler) {
        compiler.hooks.beforeRun.tap('TypescriptAliasPlugin', () => {
            const tsconfig = JSON.parse(fs.readFileSync(this.tsconfigPath,'utf-8'))
            const paths = tsconfig.compilerOptions.paths || {}
            const alias = {}

            Object.keys(paths).forEach((key) => {
                const aliasKey = key.replace('/*', '')
                const aliasPath = path.resolve(
                    path.dirname(this.tsconfigPath),
                    paths[key][0].replace('/*', '')
                )
                console.log(path.dirname(this.tsconfigPath),'66666666666666666666')
                console.log(paths[key][0].replace('/*', ''))
                alias[aliasKey] = aliasPath
            })
            compiler.options.resolve.alias = {
                ...compiler.options.resolve.alias,
                ...alias
            }
        })
    }
}
module.exports = TypescriptAliasPlugin

