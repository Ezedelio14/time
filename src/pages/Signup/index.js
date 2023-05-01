import React, { useContext, useEffect, useState } from "react";
import Container from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { setUsers } from "../../service/firebase";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    const userId = await setUsers(name, email, password);

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
            type={"text"}
            placeholder={"Enter your Name"}
            value={name}
            onChange={(e) => [setName(e.target.value), setError("")]}
          />
          <Input
            type={"email"}
            placeholder={"Enter your E-mail"}
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type={"password"}
            placeholder={"Enter your Password"}
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />
          <div>{error}</div>
          <Button text={"Register"} onClick={handleSignup} />
          <div>
            Already have a count?
            <Link to="/signin">&nbsp;Login</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
