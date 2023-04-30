import React, { useState } from "react";
import Container from "./styles";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }

    navigate("/home");
  };

  return (
    <Container>
      <div>
        <div className="content">
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
          <Button text={"Login"} onClick={handleLogin} />
          <div>
            Não tem uma conta?
            <Link to="/signup">&nbsp;Registre-se</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signin;
