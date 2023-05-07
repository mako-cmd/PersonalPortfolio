import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="place-content-center place-items-center flex flex-col h-screen">
      <h1 className="text-3xl font-bold">
        <i>Something Went Wrong </i> <span className="text-5xl">😑</span>
      </h1>
      <p className=" mt-7">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
