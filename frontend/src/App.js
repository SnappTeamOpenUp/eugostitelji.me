import React from "react";

import { Account } from "./components/Accounts";
import ROUTES, { RenderRoutes } from "./routes";

const App = () => {
  return (
    <div>
      <Account>
        <RenderRoutes routes={ROUTES} />
      </Account>
    </div>
  );
};

export default App;
