import PropTypes from "prop-types";

function Container({ customClass, children }) {
  return (
    <>
      {/* <div className={`${styles.container} ${customClass} `}>{children}</div> */}
      <div className={customClass}>{children}</div>
    </>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired, // Validação para garantir que children sejam fornecidos
  customClass: PropTypes.string, // Validação para customClass
};

export default Container;
