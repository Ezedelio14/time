import React, { useEffect } from "react";
import Container from "./styles";
import Logo from "../../components/Logo/index";
import { Link } from "react-router-dom";
import content from "../../content/content.json";

const Landing = () => {
  const pagamento = async () => {
    // URL to which you want to make the POST request
    const url = "https://api.manjar.app.br/api/v1/users";

    // Data to be sent in the request body (in this case, a JSON object)
    const data = {
      tipo: "Vegano",
      nome: "Ezedélio Garcia",
      email: "ezedelio.garcia@example.com",
      telefone: "555-222-7890",
      password: "senha_segura123",
      cpf: "12346578901",
      idPlano: 2,
      acesso: "Cliente",
      img: "caminho/para/imagem.png",
    };

    // Options for the fetch request
    const options = {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Specify the content type of the request body
        // You can add more headers here if needed
      },
      body: JSON.stringify(data), // Convert the data object to a JSON string
    };

    // Make the POST request using the Fetch API
    await fetch(url)
      .then((response) => response.json()) // Parse the response as JSON
      .then((result) => {
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    // Make a GET request using the Fetch API
    fetch("https://api.manjar.app.br/api/v1/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        console.log("Data:", data);
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
      });
  }, []);

  return (
    <Container>
      <div className="navbar">
        <Logo />
        <nav>
          <Link to="/">About Us</Link>
          <Link to="/">Contact</Link>
        </nav>
        <div>
          <Link to="login">Login</Link>/<Link to="signup">SignUp</Link>
        </div>
      </div>
      <div className="container">
        <div>
          <h1>
            Welcome <br />
            to our <span className="active">activity</span> control!
          </h1>
          <p>{content.landing.slogan}</p>
        </div>
        <div>
          <img src="./assets/images/1.png" alt="" className="landin-img" />
        </div>
      </div>

      <button onClick={pagamento}>Send email</button>
    </Container>
  );
};

export default Landing;
