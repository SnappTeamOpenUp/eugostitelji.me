import React from "react";
import { Account } from "./components/Accounts";
import ROUTES, { RenderRoutes } from "./routes";

const App = () => {
  return (
    <div className="App">
      <Account>
        <RenderRoutes routes={ROUTES} />
      </Account>
    </div>
  );
};

export default App;
