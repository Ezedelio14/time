import React, { useState } from "react";
import Container from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app, { db, userCollection } from "../../service/firebase";
import { doc, setDoc } from "firebase/firestore";
import { getAnalytics, setUserId } from "firebase/analytics";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        await setDoc(doc(db, "users", `${user.uid}`), { name });
        navigate(`/${user.uid}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });

    const analytics = getAnalytics(app);
    setUserId(analytics, "123456");
  };

  return (
    <Container>
      <div>
        <div className="content">
          <Input
            type={"text"}
            placeholder={"Enter your Name"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
