import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
