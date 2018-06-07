import React from 'react';
import { render } from 'react-dom';
import XMLHttpRequestPromise from 'xhr-promise';

const SuccessAlert = ({ message }) => (
  <div className="alert alert-success" role="alert">{message}</div>
);

const ErrorAlert = ({ error }) => (
  <div className="alert alert-danger" role="alert">{error}</div>
);

document.getElementById('send-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const parent = document.getElementById('alert-holder');
  const number = document.getElementById('number').value;
  const text = document.getElementById('text').value;
  const request = new XMLHttpRequestPromise();
  try {
    const response = await request.send({
      method: 'POST',
      url: '/api/sms',
      data: JSON.stringify({ number, text }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status.toString().startsWith('2')) {
      render(<SuccessAlert message="Zpráva byla odeslaná" />, parent);
    } else if (response.status.toString().startsWith('4')) {
      render(<ErrorAlert error="Neplatné telefonní číslo nebo až moc dlouhá zpráva" />, parent);
    } else if (response.status.toString().startsWith('5')) {
      render(<ErrorAlert error="Nyní není možné poslat SMS. Zkuste to později" />, parent);
    }
  } catch (e) {
    render(<ErrorAlert error="Objevila se chyba při odesílání SMS. Zkuste to později" />, parent);
  }
});
