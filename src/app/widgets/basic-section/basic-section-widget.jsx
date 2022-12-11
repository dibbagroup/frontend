export const BasicSectionWidget = (props) => {
  return (
    <section>
      <h1>{props.title}</h1>
      <hr />
      <p className="fw-lighter text-justify">{props.text}</p>
    </section>
  );
};
