import React from 'react';
import error from '../../assets/404.svg'
import styled from 'styled-components';
import colors from '../../utils/style/colors'

const Error = () => {

    const ErrorWrapper = styled.div`
        display: flex;
        flex-direction: column;
        margin: 30px;
        align-items: center;
        background-color: ${colors.background};

    `

    const TitreH1 = styled.h1`
        font-weight: 300;
        `
    const CardImage = styled.img`
        max-width: 800px;
        `
    const TitreH2 = styled.h2`
        font-weight: 300;
        color: ${colors.secondary};
        `
        
    return (
        <ErrorWrapper>
            <TitreH1>Oups...</TitreH1>
            <CardImage src={error} alt="Cette page n'existe pas" />
            <TitreH2>Il semblerait qu'il y ait un problème</TitreH2>
        </ErrorWrapper>
    );
};

export default Error;