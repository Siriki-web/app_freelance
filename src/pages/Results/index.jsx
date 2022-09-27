import React from 'react';
import { useContext } from 'react';
import { SurveyContext } from '../../utils/context/ThemeProvider';
import styled from 'styled-components';

// const Resultats = styled.h1`
//     text-align : center;
    // `

const Results = () => {
    const { answers } = useContext(SurveyContext)
    console.log(answers)
    return (
        <div>
            {
                resultsData && resultsData.map((result, index) => (
                    <JobTitle
                        key={`result-title-${index}-${result.title}`} theme={theme}>
                    </JobTitle>

                ))
            }
        </div>
    );
};

export default Results;

export function formatJobList(title, listLength, index){
    if (index === listLength - 1){
        return title
    }
    return `${title},`
}