import styled from "styled-components";

export const AlbumInformationContainer = styled.div`
  padding: 0.25rem;
`;

export const AlbumName = styled.div``;

export const ArtistName = styled.div`
  font-weight: bold;
`;

export const Polaroid = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  box-sizing: border-box;

  & > img {
    display: block;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  padding: 0.25rem;
  width: 25%;
`;

export default Wrapper;
