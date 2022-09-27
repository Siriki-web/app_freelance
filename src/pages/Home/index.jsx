import React from 'react';
import ImageAccueil from '../../assets/home-illustration.svg'
import styled from 'styled-components';
import { StyledLink } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'
import { Link } from 'react-router-dom';

const Home = () => {

    const StyleH2 = styled.h2`
        padding-bottom: 30px;
        max-width: 280px;
        line-height: 50px;
    `

    const ImageIllustation = styled.img`
        flex: 1;
        `

    const ColGauche = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        ${StyledLink} {
            max-width: 250px;
        }
        `

    const HomeContainer = styled.div`
        margin: 30px;
        background-color: ${colors.background};
        padding: 60px 90px;
        display: flex;
        flex-direction: row;
        max-width: 1200px;
        `    

    const HomeWrapper = styled.div`
        display: flex;
        justify-content: center;
        `    

    return (
        <HomeWrapper>
            <HomeContainer>
                <Link to='/mapage'>Page débutant</Link>
                <ColGauche>
                    <StyleH2>Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents</StyleH2>
                    <StyledLink to="/survey/1" $isFullLink>Faire le test</StyledLink>
                </ColGauche>
                <ImageIllustation src={ImageAccueil} alt="" />
            </HomeContainer> 
        </HomeWrapper>
        
    );
};

export default Home;