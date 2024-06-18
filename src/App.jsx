import { useState } from "react";
import "./App.css";
import { UserList } from "./UserList";
import { SignUp } from "./SignUp";

function App() {
  const handleAdd = (obj) => {
    setUsers([...users, { ...obj, id: Date.now() }]);
  };

  const [users, setUsers] = useState([
    {
      id: 101,
      name: "Tiko",
      surname: "Harutunyan",
      login: "tiko.harutunyan@mail.ru",
      password: "123456",
    },
    {
      id: 102,
      name: "Aram",
      surname: "Petrosyan",
      login: "aram.petrosyan@mail.ru",
      password: "abcdef",
    },
    {
      id: 103,
      name: "Lilit",
      surname: "Hakobyan",
      login: "lilit.hakobyan@mail.ru",
      password: "789xyz",
    },
    {
      id: 104,
      name: "Karen",
      surname: "Ghazaryan",
      login: "karen.ghazaryan@mail.ru",
      password: "qwerty",
    },
    {
      id: 105,
      name: "Ani",
      surname: "Manukyan",
      login: "ani.manukyan@mail.ru",
      password: "password1",
    },
  ]);

  return (
    <>
      <UserList users={users} />
      <SignUp users={users} onAdd={handleAdd} />
    </>
  );
}

export default App;
