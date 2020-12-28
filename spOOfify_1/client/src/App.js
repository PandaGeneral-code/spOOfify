import React from "react";

import testImage from "images/cardi-b-invasion-of-privacy-album-art-2018-billboard-embed-compressed.jpg";
import { Polaroid as TestPolaroid } from "./styled";
import { useUtilsHooks } from "./utils/hooks/UtilsHooks";

import Polaroid from "./components/Polaroid/Polaroid";

const App = () => {
  const {
    utilsState: { test },
  } = useUtilsHooks();

  return (
    <>
      <div>App</div>
      <pre>{JSON.stringify({ test, testImage }, null, 2)}</pre>
      <TestPolaroid>
        <img src={testImage} />
      </TestPolaroid>
      <Polaroid
        image={testImage}
        subTitle="Invasion of Privacy"
        title="Cardi B"
      />
    </>
  );
};

export default App;
