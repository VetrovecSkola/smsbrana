import * as SMS from '../sms';

export default (number, text) => {
  console.log(`Sending SMS to ${number}`);
  return SMS.send(number, text);
};
