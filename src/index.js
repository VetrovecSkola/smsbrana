import Promise from 'bluebird';
import express from 'express';
import React from 'react';
import { createStore } from 'redux';
import * as SMS from './sms';
import reducer from './reducer';
import render from './render';
import About from './views/About';
import SendSMS from './views/SendSMS';
import Statistics from './views/Statistics';
import api from './api';
import config from './config';

global.Promise = Promise;

async function main() {
  const store = createStore(reducer);

  try {
    const identity = await SMS.identify();
    console.log(identity);
    await SMS.pin(config.pin);
  } catch (_) {
    console.log('Couldn\'t initialize modem!');
  }

  const app = express();

  app.use((req, res, next) => {
    req.state = store.getState();
    res.dispatch = store.dispatch;
    next();
  });

  app.get('/', (req, res) => {
    res.status(200).end(render('Odeslat SMS', <SendSMS />));
  });

  app.get('/statistics', (req, res) => {
    res.status(200).end(render('Statistiky',
    <Statistics
      uptime={process.uptime()}
      sent={req.state.sentSms}
      failed={req.state.failedSms}
    />));
  });

  app.get('/about', (req, res) => {
    res.status(200).end(render('O projektu', <About />));
  });

  app.use('/api', api);

  app.use(express.static('static'));

  app.use('*', (req, res) => res.end('Not found'));

  app.listen(config.port, config.ip, () => console.log(`Server listening on port ${config.ip}:${config.port}`));
}

main().catch(console.log);
