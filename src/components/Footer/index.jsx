import { useContext } from "react";
import { ThemeContext } from "../../utils/context/ThemeProvider";
import styled from "styled-components";
import colors from "../../utils/style/colors";


const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`
const NightModeButton = styled.button`
    background-color : blue;
    border: none;
    coursor: pointer;
    color: ${colors.secondary};
    `

const Footer = () => {
    const {toggleTheme, theme} = useContext(ThemeContext)
    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}>
                Changer de mode : {theme === 'light' ? 'lumière' : 'soleil'}
            </NightModeButton>
        </FooterContainer>
    );
};

export default Footer;