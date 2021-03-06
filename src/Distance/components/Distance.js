import React, { Component } from 'react';
import { InputNumber, Select, Row, Col, Button, Popover } from 'antd';
import {toKM, toMile} from '../utils/DistanceConvertor';
import './Distance.css';

class Distance extends Component {

    constructor(props) {
        super(props);

        this.state = {
            temp: '',
            scale: 'k',
            value: '',
            measure: 'Miles'
        }
    }

    render() {
        const infoK = (
            <div>
                <p>kilometers = miles * 1.609344</p>
            </div>
        );

        const infoM = (
            <div>
                <p>miles = kilometers * 0.621371192</p>
            </div>
        );

        return (
            <div>
                <Row type="flex" justify="start">
                    <Col>
                        <Popover content={this.state.scale === 'k' ? infoK : infoM} title="Formula" trigger="click">
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
                            <Select.Option value="k">to Kilometers</Select.Option>
                            <Select.Option value="m">to Miles</Select.Option>
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
            measure: value === 'k' ? 'Miles' : 'Kilometers'
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
            result = toKM(temp);
        } else if (scale === 'm') {
            result = toMile(temp);
        }

        if(result) {
            return result.toFixed(2);
        } else {
            return '';
        }
    };
}

export default Distance;
