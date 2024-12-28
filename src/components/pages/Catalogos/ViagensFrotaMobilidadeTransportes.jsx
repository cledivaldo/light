import {
  FaUserEdit,
  FaChartLine,
  FaCar,
  FaBan,
  FaQuestionCircle,
  FaSuitcaseRolling,
  FaBus,
  FaHandshake,
  FaIdBadge,
  FaTools,
  FaGasPump,
  FaShieldAlt,
  FaCarSide,
  FaArrowLeft,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import styles from "./VFMT.module.css";
import { useState } from "react";
import imagem from "../../../assets/img/viagem.svg";
import UserProfile from "../../layout/UserProfile";

const options = [
  {
    value: "/cadastroInativacaoColaborador",
    label:
      "Cadastro, Alteração ou Inativação de Dados de Colaborador no Sistema de Viagens",
    icon: <FaUserEdit />,
  },
  {
    value: "/cadastroInativacaoColaboradorUber",
    label: "Cadastro, Alteração ou Inativação de Dados de Colaborador no Uber",
    icon: <FaUserEdit />,
  },
  {
    value: "/cadastroNovoColaboradorCarsharing",
    label: "Cadastro de Novo Colaborador no CarSharing",
    icon: <FaIdBadge />,
  },
  {
    value: "/cadastroAprovadorCentroCusto",
    label: "Cadastro ou Atualização de Aprovador do Centro de Custo",
    icon: <FaChartLine />,
  },
  {
    value: "/movimentacaoPoolsCarsharing",
    label: "Movimentação entre Pools de CarSharing",
    icon: <FaCarSide />,
  },
  {
    value: "/novoColaboradorMudancaEstadual",
    label: "Novo Colaborador com Mudança Estadual (Apenas RH)",
    icon: <FaHandshake />,
  },
  {
    value: "/orientacaoCancelamentoViagens",
    label: "Orientação para Cancelamento em Viagens",
    icon: <FaBan />,
  },
  {
    value: "/registroAcionamentoSeguroVeiculo",
    label: "Registro de Acionamento de Seguro de Veículo",
    icon: <FaShieldAlt />,
  },
  {
    value: "/solicitacao2ViaCartaoCombustivel",
    label: "Solicitação de 2ª Via de Cartão Combustível",
    icon: <FaGasPump />,
  },
  {
    value: "/solicitacaoManutencaoVeiculo",
    label: "Solicitação de Manutenção de Veículo",
    icon: <FaTools />,
  },
  {
    value: "/solicitacaoOnibusVanVeiculosExecutivos",
    label: "Solicitação de Ônibus, Van e Veículos Executivos",
    icon: <FaBus />,
  },
  {
    value: "/solicitacaoVeiculoViagens",
    label: "Solicitação de Veículo em Viagens (SPOT)",
    icon: <FaCar />,
  },
  {
    value: "/solicitacoesDuvidasVeiculos",
    label:
      "Solicitações e Dúvidas sobre Veículos e Regras de Condução na Light",
    icon: <FaQuestionCircle />,
  },
  {
    value: "/solicitacoesDuvidasViagens",
    label: "Solicitações e Dúvidas em Viagens",
    icon: <FaQuestionCircle />,
  },
  {
    value: "/suporteExclusivoViagensExecutivas",
    label: "Suporte Exclusivo para Viagens Executivas",
    icon: <FaSuitcaseRolling />,
  },
];

function ViagensFrotaMobilidadeTransportes() {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState(""); // Estado para texto digitado
  const [filteredOptions, setFilteredOptions] = useState(options); // Estado para opções filtradas

  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);

    // Filtrar as opções de acordo com o texto digitado
    const newFilteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredOptions(newFilteredOptions);
  };

  const handleOptionClick = (value) => {
    console.log(value);
    navigate(value); // Redirecionar ao clicar em uma opção
  };

  return (
    <>
      <div>
        <UserProfile userName="João Silva" userId="123456" />
      </div>

      <div className={styles.vfmt}>
        <section className={styles.vfmt_container}>
          {/* Botão para retornar à Home Page */}
          <p>
            <span
              style={{
                fontSize: "1em",
                lineHeight: "1",
                display: "inline-block",
              }}
            >
              <Link to="/" className={styles.exitButton}>
                <FaArrowLeft /> Voltar à Página Inicial
              </Link>
            </span>
          </p>
          <img
            src={imagem} // Atualize com o caminho da imagem
            alt="Viagens, frota, mobilidade e transporte"
          />
          <h1>Viagens, frota, mobilidade e transporte</h1>
          <p>Escolha a opção desejada:</p>
          {/* Input de busca */}
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Digite para filtrar..."
          />
          {/* Lista de opções filtradas */}
          <ul>
            {filteredOptions.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
              >
                <span>{option.icon}</span>
                {option.label}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

export default ViagensFrotaMobilidadeTransportes;
