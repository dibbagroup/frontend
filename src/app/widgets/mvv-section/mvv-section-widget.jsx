export const MvvSectionWidget = (props) => {
  return (
    <section>
      <h3>{props.title}</h3>
      <hr />
      {props.subSections.map((row, e) => (
        <div className="sub-section py-3">
          <h4>{row.title}</h4>
          <p className="fw-lighter">{row.text}</p>
        </div>
      ))}
    </section>
  );
};
