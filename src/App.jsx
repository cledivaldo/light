import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

// Componentes globais
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";

// Configurações de Rotas
import { generalRoutes, catalogRoutes, catalogVfmtRoutes } from "./Routes";

// Páginas
import Login from "./components/layout/Login"; // Importar o componente Login
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticação
  const location = useLocation();

  // Abrir o modal de autenticação se necessário
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Função para lidar com a autenticação
  const handlePasswordSubmit = (username, password) => {
    if (username === "admin" && password === "senha123") {
      setIsAuthenticated(true); // Se as credenciais forem válidas, marca como autenticado
      closeModal(); // Fecha o modal de senha
    } else {
      alert("Credenciais incorretas!");
    }
  };

  // Função para proteger rotas privadas
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />; // Redireciona para login se não estiver autenticado
    }
    return children;
  };

  // Rotas que não exibem Navbar e Footer
  const noLayoutRoutes = [
    "/viagensFrotaMobilidadeTransportes",
    "/cadastroInativacaoColaborador",
  ];

  // Verificar se a rota atual está na lista
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <Container customClass="container">
        <Routes>
          {/* Rota de login */}
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />

          {/* Rotas Gerais (Proteger página 'Intranet' com o componente ProtectedRoute) */}
          {generalRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                path === "/intranet" ? (
                  <ProtectedRoute>
                    <Component />
                  </ProtectedRoute>
                ) : (
                  <Component />
                )
              }
            />

            // <Route key={path} path={path} element={<Component />} />
          ))}

          {/* Rotas Catálogo */}
          {catalogRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}

          {/* Rotas Catálogo VFMT */}
          {catalogVfmtRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </Container>
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
