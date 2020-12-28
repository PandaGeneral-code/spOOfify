import axios from "axios";
import React, { useEffect, useState } from "react";

import Polaroid from "./components/Polaroid/Polaroid";
import RootWrapper, { AlbumCoversWrapper } from "./styled";

const App = () => {
  const [albumCoverFileNames, setAlbumCoverFileNames] = useState([]);

  const fetchAlbumCoverFileNames = async () => {
    try {
      const {
        data: { files },
      } = await axios.get("http://localhost:8080/");
      setAlbumCoverFileNames(() => files);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAlbumCoverFileNames();
  }, []);

  return (
    <RootWrapper>
      <AlbumCoversWrapper>
        {albumCoverFileNames.map((fileName) => (
          <Polaroid image={fileName} key={fileName} />
        ))}
      </AlbumCoversWrapper>
    </RootWrapper>
  );
};

export default App;
