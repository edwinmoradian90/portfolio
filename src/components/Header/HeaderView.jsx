import React from "react";
import {
  HeaderContainer,
  Name,
  Titles,
  Text,
  Wrapper,
} from "../style/header/headerStyles";

const HeaderView = (props) => {
  const { data } = props.data;
  const { name, titles, text } = data;
  return (
    <HeaderContainer className="headerView">
      <Wrapper>
        <Name className="headerView">{name}</Name>
        <Titles className="headerView">
          {titles !== undefined
            ? `${titles[0]}, ${titles[1]}, and ${titles[2]}.`
            : null}
        </Titles>
        <Text className="headerText">{text ? text : null}</Text>
      </Wrapper>
    </HeaderContainer>
  );
};

export default HeaderView;
