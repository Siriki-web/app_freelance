import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Card from '../../components/Card';
// import DefaultPicture from '../../assets/photo.png'
import styled from 'styled-components';
import colors from '../../utils/style/colors'

    const CardsContainer = styled.div`
        display: grid;
        gap: 24px;
        grid-template-rows: 350px 350px;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-items: center;
        `

    const TitreH1 = styled.h1`
        font-size: 30px;
        color: black;
        padding-bottom: 30px;
        text-align: center;
        `    
    const TitreH2 = styled.h2`
        font-size: 20px;
        font-weight: 300;
        padding-bottom: 30px;
        color: ${colors.secondary};
        text-align: center;
        `    

const Freelances = () => {
    const [freelancersList, setFreelancersList] = useState([])
    const history = useNavigate()
    
    useEffect(() => {
        fetch(`http://localhost:8000/freelances`)
            .then((response) => response.json()
            .then(({freelancersList}) => setFreelancersList(freelancersList))
        )
    }, [])

    const goFreelancer = (id) => {
        history.push(`/freelancersList/${id}`)
    }    

    return (
        <div>
            <TitreH1>Trouvez votre prestataire</TitreH1>
            <TitreH2>Chez Shinny nous réunissons les meilleurs profils pour vous</TitreH2>
            <CardsContainer onClick={() => goFreelancer(freelancersList.id)}>
                {
                freelancersList.map(({id, name, job, picture}) =>
                    <Card 
                        key={id} 
                        label={name} 
                        title={job} 
                        picture={picture}/>
                )
            }
            </CardsContainer>
           
        </div>
    );
};

export default Freelances;