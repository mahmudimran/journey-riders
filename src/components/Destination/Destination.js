import React from 'react';
import { Container } from 'react-bootstrap';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const Destination = () => {

    return (
        <div>
            <Container>

                <Map google={this.props.google} zoom={14}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                    <InfoWindow onClose={this.onInfoWindowClose}>

                    </InfoWindow>
                </Map>

            </Container>
        </div>
    );
};



export default GoogleApiWrapper({
    apiKey: ("AIzaSyA873Z1Cm3fAUZ8fkRQIhwBmhWIbrhR8cg")
  })(Destination)