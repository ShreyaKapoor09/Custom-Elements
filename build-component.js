const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/<web-component>/runtime.js',
'./dist/<web-component>/polyfills.js',
'./dist/<web-component>/scripts.js',
'./dist/<web-component>/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/options.js');
// await fs.copyFile('./dist/angular-elements/styles.css', 'elements/styles.css')
// await fs.copy('./dist/angular-elements/assets/', 'elements/assets/' )
})()