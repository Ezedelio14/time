import React, { useState } from "react";
import Container from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../service/firebase";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Container>
      <div>
        <div className="content">
          <Input
            type={"email"}
            placeholder={"Enter your E-mail"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type={"password"}
            placeholder={"Enter your Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text={"SignUp"} onClick={handleSignUp} />
          <div>
            Already have a count?
            <Link to="/login">&nbsp;Login</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
