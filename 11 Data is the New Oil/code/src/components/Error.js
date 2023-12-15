import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div style={{ color: "red" }}>
      <h2>
        {err.status} : {err.statusText}
      </h2>
      <h2>{err.data}</h2>
    </div>
  );
};
export default Error;
