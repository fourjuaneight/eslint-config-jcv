const eslint = require('eslint');
const test = require('tape');

test('Load config in eslint to validate all rule syntax is correct', ts => {
  const { CLIEngine } = eslint;

  const cli = new CLIEngine({
    configFile: '.eslintrc.js',
  });

  const code = 'const foo = 1;\nconst bar = () => {};\nbar(foo);\n';

  ts.equal(cli.executeOnText(code).errorCount, 0);
  ts.end();
});
