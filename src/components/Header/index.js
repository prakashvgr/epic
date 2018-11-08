import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './header.scss';

const heathrowLogo = '/assets/images/heathrow-logo.png';

export default class Header extends React.Component {
    render() {
        return(
            <header className="header-container">
                <Grid className="fluid">
                    <Row>
                        <Col sm={3} md={2}>
                            <img src={heathrowLogo} />
                        </Col>
                    </Row>
                </Grid>
            </header>
        );
    }
}