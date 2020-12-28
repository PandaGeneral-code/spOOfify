import React from "react";

import Wrapper from "./styled";

const Polaroid = ({ image, subTitle, title }) => {
  return (
    <Wrapper>
      <ol>
        <li>{title}</li>
        <li>{subTitle}</li>
      </ol>
    </Wrapper>
  );
};

export default Polaroid;
