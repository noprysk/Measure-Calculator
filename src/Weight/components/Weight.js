import React, { Component } from 'react';
import { InputNumber, Select, Row, Col, Button, Popover } from 'antd';
import {toKilograms, toPounds} from '../utils/WeightConvertor';
import './Weight.css';

class Weight extends Component {

    constructor(props) {
        super(props);

        this.state = {
            temp: '',
            scale: 'k',
            value: '',
            measure: 'Pounds'
        }
    }

    render() {
        const infoKilograms = (
            <div>
                <p>kg = lb * 0.45359237</p>
            </div>
        );

        const infoPounds = (
            <div>
                <p>lb = kg * 2.20462262185</p>
            </div>
        );

        return (
            <div>
                <Row type="flex" justify="start">
                    <Col>
                        <Popover content={this.state.scale === 'k' ? infoKilograms : infoPounds} title="Formula" trigger="click">
                            <Button id="btnInfo" shape="circle" icon="info" size="small" />
                        </Popover>&ensp;
                        <span>{this.state.measure}:</span>
                    </Col>
                </Row>
                <Row className="top-padding-5">
                    <Col>
                        <InputNumber
                            onChange={this.handleChangeTemp}
                            value={this.state.temp} />&emsp;

                        <Select defaultValue={this.state.scale} onChange={this.handleChangeScale}>
                            <Select.Option value="k">to Kilograms</Select.Option>
                            <Select.Option value="p">to Pounds</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <Row className="top-padding-10">
                    <Col>
                        <span>Result: {this.state.value}</span>
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
            measure: value === 'k' ? 'Pounds' : 'Kilograms'
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
        if(scale === 'k') {
            result = toKilograms(temp);
        } else if (scale === 'p') {
            result = toPounds(temp);
        }

        if(result) {
            return result.toFixed(2);
        } else {
            return '';
        }
    };
}

export default Weight;
