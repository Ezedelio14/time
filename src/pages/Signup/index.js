import React, { useState } from "react";
import Container from "./styles";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
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
          <Button text={"Register"} onClick={handleLogin} />
          <div>
            Já tem uma conta?
            <Link to="/signin">&nbsp;Login</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
