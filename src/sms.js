import childProcess from 'child_process';

const execute = (cmd) => new Promise((resolve, reject) => {
  const gammu = childProcess.exec(cmd, (error, stdout, stderr) => {
    if (error) {
      reject(error);
      return;
    }
    resolve(stdout);
  });
});

export const identify = () => execute('gammu --identify');

export const pin = (pin) => execute('gammu --entersecuritycode PIN ' + pin);

export const send = (to, text) => execute(`gammu sendsms TEXT ${to} -text "${text}"`);
