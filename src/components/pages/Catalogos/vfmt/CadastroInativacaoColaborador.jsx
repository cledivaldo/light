import { useState } from "react";
import styles from "./CadastroInativacaoColaborador.module.css"; // Importando o CSS para ser aplicado ao formulário
import UserProfile from "../../../layout/UserProfile";
import { useNavigate } from "react-router-dom";

function CadastroInativacaoColaborador() {
  const [charCount, setCharCount] = useState(0);
  const navigate = useNavigate();

  const handleTextareaChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "justificativa") {
      setCharCount(value.length);
    }
  };

  const [formData, setFormData] = useState({
    email: "joao@empresa.com",
    nome: "JOÃO SILVA SILVA",
    matricula: "123456",
    area: "DEP. PESSOAL",
    solicitacao: "",
    proprioCadastro: "",
    emailCadastro: "",
    nomeCadastro: "",
    matriculaCadastro: "",
    areaCadastro: "",
    justificativa: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulário enviado:", formData);
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  };

  const validateForm = () => {
    return (
      formData.email &&
      formData.nome &&
      formData.matricula &&
      formData.area &&
      formData.solicitacao &&
      formData.justificativa
    );
  };

  // Função para navegar para a tela anterior
  const handleBack = () => {
    navigate(-1); // Navega para a página anterior no histórico
  };

  return (
    <div className={styles.container}>
      <h1>Cadastro, Alteração ou Inativação de Dados de Colaborador</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.container_formgroup}>
          <label htmlFor="email">E-mail do Colaborador/Login:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email preenchido automaticamente"
            disabled
          />
        </div>
        <div className={styles.container_formgroup}>
          <label htmlFor="nome">Nome do Colaborador :</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Nome preenchido automaticamente"
            disabled
          />
        </div>
        <div className={styles.container_formgroup}>
          <label htmlFor="matricula">Matrícula do Colaborador:</label>
          <input
            type="text"
            id="matricula"
            name="matricula"
            value={formData.matricula}
            onChange={handleChange}
            required
            placeholder="Matrícula preenchida automaticamente"
            disabled
          />
        </div>
        <div className={styles.container_formgroup}>
          <label htmlFor="area">Área do Colaborador:</label>
          <input
            type="text"
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
            placeholder="Área preenchida automaticamente"
            disabled
          />
        </div>
        <div className={styles.container_formgroup}>
          <label htmlFor="solicitacao">Seleção da Solicitação:</label>
          <select
            id="solicitacao"
            name="solicitacao"
            value={formData.solicitacao}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="1">Cadastro de Dados</option>
            <option value="2">Alteração de Dados</option>
            <option value="3">Inativação de Colaborador</option>
          </select>
        </div>
        <div className={styles.container_formgroup}>
          <label htmlFor="proprioCadastro">
            Seleção Facilitada de Cadastro:
          </label>
          <select
            id="proprioCadastro"
            name="proprioCadastro"
            value={formData.proprioCadastro}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="1">Sim</option>
            <option value="2">Não</option>
          </select>
        </div>
        {formData.proprioCadastro === "2" && (
          <>
            <div className={styles.container_formgroup}>
              <label htmlFor="emailCadastro">
                E-mail do Colaborador da Light:
              </label>
              <input
                type="email"
                id="emailCadastro"
                name="emailCadastro"
                value={formData.emailCadastro}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.container_formgroup}>
              <label htmlFor="nomeCadastro">
                Nome do Colaborador da Light:
              </label>
              <input
                type="text"
                id="nomeCadastro"
                name="nomeCadastro"
                value={formData.nomeCadastro}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.container_formgroup}>
              <label htmlFor="matriculaCadastro">
                Matrícula do Colaborador da Light:
              </label>
              <input
                type="text"
                id="matriculaCadastro"
                name="matriculaCadastro"
                value={formData.matriculaCadastro}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.container_formgroup}>
              <label htmlFor="areaCadastro">
                Área do Colaborador da Light:
              </label>
              <input
                type="text"
                id="areaCadastro"
                name="areaCadastro"
                value={formData.areaCadastro}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        <div className={styles.container_formgroup}>
          <label htmlFor="justificativa">Justificativa da Solicitação:</label>
          <textarea
            id="justificativa"
            name="justificativa"
            value={formData.justificativa}
            onChange={handleTextareaChange}
            required
            maxLength={500}
            placeholder="Descreva o motivo da solicitação."
          />
          <p>{charCount} caracteres(máx. 500)</p>
        </div>
        <div className={styles.container_buttons}>
          <button
            className={styles.container_buttons_cancel}
            type="button"
            onClick={handleBack}
          >
            {" "}
            Voltar
          </button>
          <button className={styles.container_buttons_submit} type="submit">
            Prosseguir / Enviar
          </button>
        </div>
      </form>

      <UserProfile userName="João Silva" userId="123456" />
    </div>
  );
}

export default CadastroInativacaoColaborador;
