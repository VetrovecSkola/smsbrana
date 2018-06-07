import React from 'react';

const SendSMS = () => (
  <div className="container">
    <form id="send-form" className="panel panel-default">
      <div className="panel-heading">SMS formulář</div>
      <div className="panel-body">
        <div id="alert-holder" />
        <div className="form-group">
          <label htmlFor="number">Telefonní číslo (+420)</label>
          <input type="text" className="form-control" id="number" name="number" placeholder="720777666" />
        </div>
        <div className="form-group">
          <label htmlFor="text">Obsah zprávy</label>
          <textarea 
            type="text" 
            className="form-control" 
            id="text" 
            name="text" 
            placeholder="Obsah vaší zprávy..." 
            rows="12" 
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Odeslat SMS" />
      </div>
    </form>
  </div>
);

export default SendSMS;
