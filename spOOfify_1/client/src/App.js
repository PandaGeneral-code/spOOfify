import React from "react";

import { useUtilsHooks } from "./utils/hooks/UtilsHooks";

const App = () => {
  const {
    utilsState: { test },
  } = useUtilsHooks();

  return (
    <>
      <div>App</div>
      <pre>{JSON.stringify({ test }, null, 2)}</pre>
    </>
  );
};

export default App;
