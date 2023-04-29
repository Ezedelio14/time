import React, { useState } from "react";
import Container from "./styles";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
    }

    navigate("/home");
  };

  return (
    <Container>
      <h1>Login</h1>
      <div>
        <Input
          type={"email"}
          placeholder={"Digite seu E-mail"}
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type={"password"}
          placeholder={"Digite seu Password"}
          value={password}
          onChange={(e) => [setPassword(e.target.value), setError("")]}
        />
        <div>{error}</div>
        <Button text={"Entrar"} onClick={handleLogin} />
        <div>
          Não tem uma conta?
          <div>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signin;
