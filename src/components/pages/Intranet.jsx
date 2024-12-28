import { Link, useNavigate } from "react-router-dom";
import styles from "./Intranet.module.css";
import { useState } from "react";

function Intranet() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Controle da autenticação

  // Redireciona caso o usuário não esteja autenticado
  const navigate = useNavigate();

  // Verifica se o usuário está autenticado ao carregar a página
  if (!isAuthenticated) {
    navigate("/login");
  }

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/login"); // Se não autenticado, redireciona para o login
  //   }
  // }, [isAuthenticated, navigate]);

  // Função simulada de autenticação
  // const handleLogin = (password) => {
  //   console.log(password);
  //   if (password === "senha123") {
  //     setIsAuthenticated(true); // Alterar para verdadeiro, simula login
  //   }
  // };

  const navLinks = [
    { path: "/facilitiesObras", label: "Facilities e Obras" },
    { path: "/patrimonioSeguranca", label: "Patrimônio e Segurança" },
    {
      path: "/viagensFrotaMobilidadeTransportes",
      label: "Viagens, Frota, Mobilidade e Transportes",
    },
  ];

  return (
    <div className={styles.intranet}>
      <section className={styles.intranet_container}>
        <img src="../../src/assets/img/viagem.svg" alt="Imagem de fundo" />
        <h1>Intranet</h1>
        <p>Escolha a seção que deseja acessar:</p>

        <ul className={styles.list}>
          {navLinks.map((link, index) => (
            <li key={index} className={styles.item}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        {/* Botão simulando o login */}
        {/* <button onClick={() => handleLogin("senha123")}>Entrar</button> */}
      </section>
    </div>
  );
}

export default Intranet;
