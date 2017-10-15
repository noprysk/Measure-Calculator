import React, { Component } from 'react';
import { InputNumber, Select, Row, Col, Button } from 'antd';
import {toCelsius, toFahrenheit} from './../utils/TemperatureConvertor';
import './Temperature.css';

class Temperature extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp: '',
            scale: 'c',
            value: '',
            measure: 'Fahrenheit'
        }
    }

    render() {

        return (
            <div>
                <Row type="flex" justify="start">
                    <Col span={16}>
                        <span>{this.state.measure}:</span>
                    </Col>
                </Row>
                <Row className="top-padding-5">
                    <Col span={2}>
                        <InputNumber
                            onChange={this.handleChangeTemp}
                            value={this.state.temp} />
                    </Col>
                    <Col span={14}>
                        <Select defaultValue={this.state.scale} onChange={this.handleChangeScale}>
                            <Select.Option value="c">to Celsius</Select.Option>
                            <Select.Option value="f">to Fahrenheit</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <Row className="top-padding-10">
                    <Col span={16}>
                        <Button shape="circle" icon="info" size="small" /> <span>Result: {this.state.value}</span>
                    </Col>
                </Row>
            </div>
        );
    }

    handleChangeScale = (value) => {
        this.setState({
            scale: value,
            value: '',
            temp: '',
            measure: value === 'f' ? 'Celsius' : 'Fahrenheit'
        });
    };

    handleChangeTemp = (value) => {
        this.setState({
            temp: value,
            value: this.convertTemp(this.state.scale, value)
        });
    };

    convertTemp = (scale, temp) => {
        if (temp === '') {
            return;
        }

        let result;
        if(scale === 'c') {
            result = toCelsius(temp);
        } else {
            result = toFahrenheit(temp);
        }

        return result.toFixed(2);
    };
}

export default Temperature;
