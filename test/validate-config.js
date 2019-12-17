const eslint = require('eslint');
const test = require('tape');

test('Load config in eslint to validate all rule syntax is correct', ts => {
  const { CLIEngine } = eslint;

  const cliCode = new CLIEngine({
    configFile: '.eslintrc.js',
  });

  const cliReact = new CLIEngine({
    configFile: '.eslintrc.js',
    extends: ['../react.js'],
  });

  const code = 'const foo = 1;\nconst bar = () => {};\nbar(foo);\n';

  ts.equal(cliCode.executeOnText(code).errorCount, 0);
  ts.equal(cliReact.executeOnFiles(['./test/test.jsx']).errorCount, 0);
  ts.end();
});
