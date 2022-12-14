import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { SurveyContext } from '../../utils/context/ThemeProvider';
import colors from '../../utils/style/colors'
import { useFetch } from '../../utils/hooks';

const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `    

const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
    `

const QuestionContent = styled.span`
    margin: 30px;
    `

const LinWrapper = styled.div`
    padding-top: 30px;
    & a { 
        color: black
    }
    & a:first-of-type {
        margin-right: 20px;
    }`            

const ReplyBox = styled.button`
    border: none;
    height: 100px;
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    cursor: pointer;
    box-shadow: ${(props) => 
        props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
    &:first-child{
        margin-right: 15px;
    }
    &:last-of-type{
        margin-left: 15px;
    }
    `

const ReplyWrapper = styled.div`
    display: flex;
    flex-direction: row;
    `    
 

const Survey = () => {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1
    // const [surveyData, setSurveyData] = useState({})
    const { saveAnswers, answers } = useContext(SurveyContext)
    const { data, isLoading} = useFetch(`http://localhost:8000/survey`)
    const { surveyData } = data

    const saveReply = (answer) => {
        saveAnswers({ [questionNumber]: answer})
    }

    // useEffect(() => {
    //     fetch(`http://localhost:8000/survey`)
    //         .then((response) => response.json()
    //         .then(({surveyData}) => setSurveyData(surveyData))
    //         )
    // }, [])

    return (
        <SurveyContainer>
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            <QuestionContent>{data[questionNumber]}</QuestionContent>
            {
                answers && (
                    <ReplyWrapper>
                        <ReplyBox onClick={()=> saveReply(true)} 
                                                isSelected={answers[questionNumber] === true}> Oui
                        </ReplyBox>
                        <ReplyBox onClick={()=> saveReply(false)} 
                                                isSelected={answers[questionNumber] === false}> Non
                        </ReplyBox>
                    </ReplyWrapper>
                )}
                <LinWrapper>
                    <Link to={`/survey/${prevQuestionNumber}`}>Pr??c??dent</Link>
                    {
                        surveyData[questionNumberInt + 1] ? (
                            <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                        ) : (
                            <Link to='/results'>R??sultats</Link>
                        )

                    }
                </LinWrapper>
            </SurveyContainer>
    );
};

export default Survey;