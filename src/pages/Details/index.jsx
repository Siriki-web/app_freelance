import React from 'react';
// import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react';
import styled from 'styled-components';


const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    `


const Details = () => {
    // const { idem } = useParams()
    const [freelancersList, setFreelancersList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/freelances`)
            .then((response) => response.json()
            .then(({freelancersList}) => setFreelancersList(freelancersList))
            )
    }, [])
    return (
        <div>
            {
                freelancersList.map(({id, name, picture, job}) => (
                    <div key={id}>
                        <Image src={picture} alt=""/>
                        <h2>Nom: {name}</h2>
                        <h3>Rôle: {job}</h3> 
                    </div>
                ))
            }
             
        </div>
    );
};

Details.propTypes = {
    id: PropTypes.string.isRequired
}
export default Details;