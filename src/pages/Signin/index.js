import React, { useState } from "react";
import Container from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../service/firebase";

const Signin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const userId = await getUser(email, password);

    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }

    if (userId !== "") {
      navigate(`/${userId}`);
    }
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
