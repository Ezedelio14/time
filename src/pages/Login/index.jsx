import React, { useEffect, useState } from "react";
import Container from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app, { userCollection } from "../../service/firebase";
import { getDocs } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollection);
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(users);
    };

    getUsers();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
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
          <Button text={"Login"} onClick={handleLogin} />
          <div>
            Não tem uma conta?
            <Link to="/signup">&nbsp;Registrer</Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
