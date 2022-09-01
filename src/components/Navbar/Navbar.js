import React from "react";
import { CurrencyToggler } from "components/CurrencyToggler";
import {
  NavContainer,
  StyledLink,
  LinksContainer,
  Input,
  InputContainer,
  ThemeButtonContainer,
  ThemeChangeButton,
  SearchIcon,
  RightPanel,
} from "./Navbar.styles";
class Navbar extends React.Component {
  render() {
    return (
      <NavContainer>
        <LinksContainer>
          <StyledLink to="/">Coins</StyledLink>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
        </LinksContainer>
        <RightPanel>
          <InputContainer>
            <ThemeButtonContainer>
              <SearchIcon />
            </ThemeButtonContainer>
            <Input type="text" placeholder="Search..." />
          </InputContainer>

          <CurrencyToggler />

          <ThemeButtonContainer>
            <ThemeChangeButton
              onClick={this.props.toggleTheme}
            ></ThemeChangeButton>
          </ThemeButtonContainer>
        </RightPanel>
      </NavContainer>
    );
  }
}

export default Navbar;
