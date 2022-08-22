import React from "react";
import {BoxWrapper} from "../../../components/utility/box.style";
import MenuWrapper from "./styled";

interface MenuProps {
  any?: any;
}

const MagicNavigationMenu: React.FC<MenuProps> = props => {
  const {} = props;
  console.log(123);
  return <BoxWrapper>
    <MenuWrapper>
      123
    </MenuWrapper>
  </BoxWrapper>
};

export default MagicNavigationMenu;