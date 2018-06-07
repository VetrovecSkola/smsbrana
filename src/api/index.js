import bodyParser from 'body-parser';
import express from 'express';
import postSMS from './postSMS';

const api = express();

api.use(bodyParser.json());

api.post('/sms', postSMS);

export default api;
