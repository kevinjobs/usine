const shell = require('shelljs');
const exec = shell.exec;

const commnads = [
  '\"pnpm -F @usine/utils dev\"',
  '\"pnpm -F @usine/hooks dev\"',
  '\"pnpm -F @usine/react dev\"',
  '\"pnpm -F @usine/peau dev\"',
  '\"pnpm -F @usine/docs dev\"'
]

if (exec(`concurrently ${commnads.join(' ')}`).code !== 0) {
  shell.echo('启动失败');
  shell.exit(1);
}
