export const BasicSectionWidget = (props) => {
  return (
    <section className="text-light">
      <h3>{props.title}</h3>
      <hr />
      <p className="fw-lighter text-justify">{props.text}</p>
    </section>
  );
};
