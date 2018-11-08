import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './footer.scss';

export default class Footer extends React.Component {
    render() {
        return(
            <footer className="footer-container">
                <Grid className="fluid">
                    <Row>
                        <Col>
                            &nbsp;
                        </Col>
                    </Row>
                </Grid>
            </footer>
        );
    }
}