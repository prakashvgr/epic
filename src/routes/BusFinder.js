import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SuggestionView from '../components/SuggestionView';
import SearchDestination from '../components/SearchDestination';

export default class BusFinder extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Grid className="fluid">   
                    <Row className="content-pane">
                        <Col sm={2} md={3}>
                            <SuggestionView 
                                title="Heathrow Express"
                                description="The fastest way between London Paddington and Heathrow Central."
                                titleIcon="heathrow-express-icon"
                                img="heathrow-express-train"
                                btnCaption="Tickets and information" />
                            <SuggestionView
                                title="Lounges"
                                description="Escape the crowds and find a quiet space to work or relax."
                                titleIcon="heathrow-express-icon"
                                img="premium-lounge287-158"
                                titleIcon="icon-premium-services"
                                btnCaption="Discover lounges at Heathrow" />
                        </Col>
                        <Col sm={3} md={6}>
                            <SearchDestination />
                        </Col>
                        <Col sm={2} md={3}>
                            <SuggestionView
                                title="Lounges"
                                description="Escape the crowds and find a quiet space to work or relax."
                                titleIcon="heathrow-express-icon"
                                img="premium-lounge287-158"
                                titleIcon="icon-premium-services"
                                btnCaption="Discover lounges at Heathrow" />
                            <SuggestionView 
                                title="Heathrow Express"
                                description="The fastest way between London Paddington and Heathrow Central."
                                titleIcon="heathrow-express-icon"
                                img="heathrow-express-train"
                                btnCaption="Tickets and information" />
                        </Col>
                    </Row>
                </Grid>
                <Footer />
            </div>
        );
    }
}