import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>github users</h1>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avtar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avtar_url} alt={login}></img>
              <div>
                <h4>{login}</h4>
                <a target="_blank" rel="noopener noreferrer" href={html_url}>
                  profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
