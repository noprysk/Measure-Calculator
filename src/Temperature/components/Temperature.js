import React, { Component } from 'react';
import { Input } from 'antd';
import { Select } from 'antd';
import { Row, Col } from 'antd';
import {toCelsius, toFahrenheit} from './../utils/TemperatureConvertor';

const Option = Select.Option;

class Temperature extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp: '',
            scale: 'c',
            value: ''
        }
    }

    render() {
        return (
            <div>
                <Row >
                    <Col>
                        <span>Fahrenheit:</span>
                    </Col>
                    <Col>
                        <Input
                            width="200px"
                            onChange={this.handleChangeTemp}
                            value={this.state.temp} />
                    </Col>
                    <Col>
                        <Select defaultValue={this.state.scale} onChange={this.handleChangeScale}>
                            <Option value="c">to Celsius</Option>
                            <Option value="f">to Fahrenheit</Option>
                        </Select>
                    </Col>
                    <Col>
                        <span> = {this.state.value}</span>
                    </Col>
                </Row>
            </div>
        );
    }

    handleChangeScale = (e) => {
        this.setState({
            scale: e.target.value,
            value: this.convertTemp(e.target.value, this.state.temp)
        });
    };

    handleChangeTemp = (e) => {
        this.setState({
            temp: e.target.value,
            value: this.convertTemp(this.state.scale, e.target.value)
        });
    };

    convertTemp = (scale, temp) => {
        if(scale === 'c') {
            return toCelsius(temp);
        } else {
            return toFahrenheit(temp);
        }
    }
}

export default Temperature;
