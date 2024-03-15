import React, { useState } from "react";
import { MdEmail, MdLock, MdLogin } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

import "./login.css";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClick = (ev) => {
    ev.preventDefault();
    setShow(!show);
  };

  return (
    <div className="login">
      <div className="login-logo">
        <MdLogin
          style={{
            height: "450px",
            width: "450px",
          }}
        />
      </div>

      <div className="login-right">
        <h1>Login</h1>
        <div className="input-email">
          <MdEmail
            size={"30px"}
            style={{
              marginLeft: "10px",
            }}
          />

          <input type="email" placeholder="Digite o seu email" />
        </div>

        <div className="input-password">
          <MdLock
            size={"30px"}
            style={{
              marginLeft: "10px",
            }}
          />

          <input
            type={show ? "text" : "password"}
            placeholder="Digite sua senha"
          />
          <div>
            {show ? (
              <HiEye onClick={handleClick} />
            ) : (
              <HiEyeOff onClick={handleClick} />
            )}
          </div>
        </div>

        <button type="submit">Entrar</button>
        <h4>Não tem uma conta?</h4>
        <button type="submit">Cadastrar</button>
      </div>
    </div>
  );
};

export default Login;
