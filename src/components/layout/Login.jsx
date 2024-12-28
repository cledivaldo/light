import { useState } from "react";
import styles from "./Login.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Para redirecionamento após login

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação de usuário e senha (substitua por sua lógica de autenticação real)
    if (username === "admin" && password === "senha123") {
      setIsAuthenticated(true); // Se as credenciais estiverem corretas, atualize o estado
      navigate("/intranet"); // Redireciona para a página protegida
    } else {
      alert("Credenciais incorretas.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Usuário"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
        />
        <button type="submit" className={styles.button}>
          Entrar
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  setIsAuthenticated: PropTypes.any,
};

export default Login;
