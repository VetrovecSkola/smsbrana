import sendSMS from '../middleware/sendSMS';
import validateSMS from '../middleware/validateSMS';
import * as Actions from '../actions';

export default async (req, res) => {
  const { number, text } = req.body;
  if (!number || !text) {
    res.status(400).end(JSON.stringify({ status: 'error', message: 'Invalid request' }));
    return;
  }
  const errorMessage = validateSMS(number, text);
  if (errorMessage) {
    res.status(400).end(JSON.stringify({ status: 'error', message: errorMessage }));
    return;
  }
  try {
    await sendSMS(`+420${number}`, text);
    res.dispatch(Actions.addSent());
    res.status(200).end(JSON.stringify({ status: 'success', data: null }));
  } catch (e) {
    console.log('Error while sending SMS');
    console.log(e);
    res.dispatch(Actions.addFailed());
    res.status(500).end(JSON.stringify({ status: 'error', message: 'Error while sending SMS. Try again later' }));
  }
};
