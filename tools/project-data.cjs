const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

module.exports = function loadData(filename = 'projects') {
  const source = fs.readFileSync(
    path.resolve(__dirname, '../src/app/data', filename + '.ts'),
    'utf8',
  );
  const result = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const exports = {};
  new Function('exports', result.outputText)(exports);
  return exports;
};
