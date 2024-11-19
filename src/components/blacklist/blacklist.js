import React from "react";
import blacklistConfig from "./config";

const BlacklistTable = () => {
  const { title, data } = blacklistConfig;

  return (
    <div className="table-container">
      <div className="blacklist_title">
        <h1>{title}</h1>
      </div>
      <table className="blacklist_table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Username</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.username}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlacklistTable;