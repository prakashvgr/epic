import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './suggestionView.scss';

export default class SuggestionView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const heathrowIcon = `/assets/images/${this.props.titleIcon}.png`;
        const heathrowImage = `/assets/images/${this.props.img}.jpg`;

        return (
            <Grid className="fluid">
                <Row className="suggestion-container">
                    <Col className="suggestion-header">
                        <Col sm={3} md={3} className="suggestion-header-logo" >
                            <img src={heathrowIcon} />
                        </Col>
                        <Col className="suggestion-header-caption" >
                            {this.props.title}
                        </Col>
                    </Col>
                    <Col className="suggestion-image">
                        <img src={heathrowImage} />
                    </Col>
                    <Col className="suggestion-content">
                        <Col className="suggestion-content-text">
                            {this.props.description}
                        </Col>
                        <Col className="suggestion-content-btn">
                            {this.props.btnCaption}
                        </Col>
                    </Col>
                </Row>
            </Grid>
        );
    }
}