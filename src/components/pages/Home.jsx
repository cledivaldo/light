import styles from "./Home.module.css";
import imagem from "../../assets/img/viagem.svg";
function Home() {
  return (
    <>
      <div className={styles.home}>
        <section className={styles.home_container}>
          <img src={imagem} alt="Pulse" />
          <h1>
            Bem-vindo a Empresa <span>Pulse</span>
          </h1>
          <p>
            A energia que move sonhos passa pela <span>Pulse</span>. Há mais de
            100 anos a nossa história se mistura com a do Rio de Janeiro,
            iluminando a evolução em cada casa, negócio e tornando sonhos
            possíveis.
          </p>
        </section>
      </div>
    </>
  );
}
export default Home;
