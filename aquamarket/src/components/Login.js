import React, { useState } from "react";
import axios from "axios";
import "../css/login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 로그인 처리 로직을 여기에 추가합니다.
    try {
      const response = await axios.post("http://localhost:8099/login", {
        username,
        password,
      });
      console.log(response.data);
      if (response.data === "Login successful") {
        alert("로그인 성공");
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      alert("서버 연결 실패");
    }
  };

  return (
    <div className="page-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
