import React from "react";

import Wrapper, {
  AlbumInformationContainer,
  AlbumName,
  ArtistName,
  Polaroid as StyledPolaroid,
} from "./styled";

const Polaroid = ({
  image,
  subTitle = "Album Name HERE",
  title = "Artist Name HERE",
}) => {
  return (
    <Wrapper>
      <StyledPolaroid>
        <img alt={image} src={`${process.env.REACT_APP_IMAGES_URL}/${image}`} />
        <AlbumInformationContainer>
          <ArtistName>{title}</ArtistName>
          <AlbumName>{subTitle}</AlbumName>
        </AlbumInformationContainer>
      </StyledPolaroid>
    </Wrapper>
  );
};

export default Polaroid;
