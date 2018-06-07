import React from 'react';

const formatUptime = (uptime) => `${Math.floor(uptime / 3600)}h ${Math.floor(uptime / 60)}m ${Math.floor(uptime % 60)}s`

const Statistics = ({ uptime, sent, failed }) => (
  <div className="container">
    <div id="statistics" className="panel panel-default">
      <div className="panel-body">
        <table className="table">
          <thead>
            <tr>
              <th>Statistiky</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online</td>
              <td>{formatUptime(uptime)}</td>
            </tr>
            <tr>
              <td>Odeslané SMS</td>
              <td>{sent}</td>
            </tr>
            <tr>
              <td>Neodeslané SMS</td>
              <td>{failed}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Statistics;
