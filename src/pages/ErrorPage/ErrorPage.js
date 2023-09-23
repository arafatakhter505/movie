import React from "react";
import { ErrorImg } from "../../assets";
import useTitle from "../../hooks/useTitle";

const ErrorPage = () => {
  useTitle("Page Not Found");
  return (
    <div className="h-screen flex justify-center items-center">
      <img src={ErrorImg} alt="not found" className="w-96" />
    </div>
  );
};

export default ErrorPage;
