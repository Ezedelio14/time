import React, { useEffect } from "react";
import Container from "./styles";
import Logo from "../../components/Logo/index";
import { Link } from "react-router-dom";
import content from "../../content/content.json";

const Landing = () => {
  const pagamento = async () => {
    const reqs = await fetch("https://sandbox.api.pagseguro.com/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "SEU_TOKEN",
      },
      body: JSON.stringify({
        reference_id: "ex-00001",
        customer: {
          name: "Jose da Silva",
          email: "email@test.com",
          tax_id: "12345678909",
          phones: [
            {
              country: "55",
              area: "11",
              number: "999999999",
              type: "MOBILE",
            },
          ],
        },
        items: [
          {
            name: "nome do item",
            quantity: 1,
            unit_amount: 500,
          },
        ],
        qr_codes: [
          {
            amount: {
              value: 500,
            },
            expiration_date: "2021-08-29T20:15:59-03:00",
          },
        ],
        shipping: {
          address: {
            street: "Avenida Brigadeiro Faria Lima",
            number: "1384",
            complement: "apto 12",
            locality: "Pinheiros",
            city: "São Paulo",
            region_code: "SP",
            country: "BRA",
            postal_code: "01452002",
          },
        },
        notification_urls: ["https://meusite.com/notificacoes"],
      }),
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

      <button>Send email</button>
    </Container>
  );
};

export default Landing;
