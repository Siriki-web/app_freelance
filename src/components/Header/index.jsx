import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../utils/style/colors'
import logo from '../../assets/dark-logo.png'

const Header = () => {
    const StyledLink = styled(Link)`
        padding: 10px;
        margin: 20px;
        color: #8186a0;
        text-decoration: none;
        font-size: 15px;
        ${(props) =>
            props.$isFullLink &&
            `color: white;
            border-radius: 30px;
            background-color: #5843E4;`
        }`
             

    const DivFlex = styled.div`
        display: flex; 
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        `    

    const Img = styled.img`
        height: 70px;
        `    
        

    return (
        <DivFlex>
            <Img src={logo} alt="logo du site" />
            <div>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
            </div>
        </DivFlex>
        
    );
};

export default Header;