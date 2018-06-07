import React from 'react';

const Template = ({ title, content }) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <link rel="stylesheet" href="/stylesheet.css" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossOrigin="anonymous"
      />
    </head>
    <body>
      <div id="root">
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">SMS brána</a>
            </div>
            <ul className="nav navbar-nav">
              <li><a href="/">Odeslat SMS</a></li>
              <li><a href="/statistics">Statistiky</a></li>
              <li><a href="/about">O projektu</a></li>
            </ul>
          </div>
        </nav>
        {content}
      </div>
      <script src="/bundle.js" />
    </body>
  </html>
);

export default Template;
