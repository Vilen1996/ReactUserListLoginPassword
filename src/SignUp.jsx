import { useState } from "react";

export const SignUp = ({ users, onAdd }) => {
  const [error, setError] = useState("");
  const [complete, setComplete] = useState("");
  const [user, setUser] = useState({
    name: "",
    surname: "",
    login: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const generalEmailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!user.name.trim()) {
      setComplete("");
      return setError("Please fill in your name");
    }
    if (!user.surname.trim()) {
      setComplete("");
      return setError("Please fill in your surname");
    }
    if (!user.login.trim()) {
      setComplete("");
      return setError("Please fill in your login");
    }
    if (!generalEmailRegex.test(user.login)) {
      setComplete("");
      return setError("Please enter a valid email address");
    }
    if (!user.password.trim()) {
      setComplete("");
      return setError("Please fill in your password");
    }
    if (user.password.length < 6) {
      setComplete("");
      return setError("Password should be at least 6 characters long");
    }

    const loginExist = users.some(
      (existingUser) => existingUser.login === user.login
    );

    if (loginExist) {
      setComplete("");
      return setError("Login already exists");
    }

    setComplete("Great");
    setError("");
    onAdd(user);
    setUser({
      name: "",
      surname: "",
      login: "",
      password: "",
    });
  };

  return (
    <div>
      <h3>Add User</h3>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {complete && <p style={{ color: "green" }}>{complete}</p>}
        <input
          type="text"
          placeholder="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="surname"
          value={user.surname}
          onChange={(e) => setUser({ ...user, surname: e.target.value })}
        />
        <input
          type="text"
          placeholder="login"
          value={user.login}
          onChange={(e) => setUser({ ...user, login: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};
