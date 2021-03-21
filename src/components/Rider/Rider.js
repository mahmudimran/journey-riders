
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Rider.css'
import { useHistory } from 'react-router-dom';

const Rider = (props) => {
    const {name,img} = props.rider
    const history = useHistory()
    const handleBook = (id) => {
        history.push(`/destination/${id}`);

    }
    return (
        <div >
        <Container>
            <div className="rider-item" >
            <div className="rider-card"> 
                <img src={img} alt=""/>
                <h5 style={{textTransform:'uppercase'}}>{name}</h5>
                <Button onClick={() => handleBook(props.id)} variant="contained" color="primary"> Order now</Button>
            </div>
        </div>
        </Container>
        </div>
    );
};

export default Rider;