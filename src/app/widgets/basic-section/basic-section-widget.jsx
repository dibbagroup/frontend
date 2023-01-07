export const BasicSectionWidget = (props) => {
  return (
    <section className="text-light">
      <h3>{props.title}</h3>
      <hr />
      <p className="fw-lighter text-justify">{props.textForBusiness}</p>
      <p className="fw-lighter text-justify">{props.textForClient}</p>
    </section>
  );
};
