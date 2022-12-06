import { useEffect } from "react";

export const IntegrationTestTableWidget = (props) => {
  useEffect(() => {
    console.log(props.data);
  }, []);

  return (
    <>
      {props.data.map((ev) => (
        <>
          <small>{ev.name}</small>
          <br />
        </>
      ))}
    </>
  );
};
