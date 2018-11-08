import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import './searchDestination.scss';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

const heathrowIcon = '/assets/images/Terminal_Purple_rgb_38px.png';

export default class SearchDestination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(selectedOption) {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {
        const { selectedOption } = this.state;

        return (
            <Grid className="fluid">
                <Row className="search-container">
                    <Col className="search-header">
                        <Col sm={2} md={2} className="search-header-logo" >
                            <img src={heathrowIcon} />
                        </Col>
                        <Col className="search-header-caption" >
                            Search Destination
                        </Col>
                    </Col>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                    />
                </Row>
            </Grid>
        );
    }
}