import styled from "styled-components";

export const Polaroid = styled.div`
  box-sizing: border-box;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 0;
  padding: 0;
  width: 50%;

  & > img {
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

// div.polaroid {
//     width: 80%;
//     background-color: white;
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//   }

//   img {width: 100%}

//   div.container {
//     text-align: center;
//     padding: 10px 20px;
//   }
