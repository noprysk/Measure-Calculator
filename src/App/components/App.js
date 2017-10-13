import React, { Component } from 'react';
import { Collapse } from 'antd';

import './App.css';
import Temperature from './../../Temperature/components/Temperature';
import 'antd/dist/antd.css';

const Panel = Collapse.Panel;

class App extends Component {
  render() {
    return (
        <Collapse defaultActiveKey={['1']}>
            <Panel header="Temperature conversion" key="1">
                <Temperature />
            </Panel>
            <Panel header="Test 2" key="2">
                test 2
            </Panel>
            <Panel header="Test 3" key="3">
                test 3
            </Panel>
        </Collapse>
    );
  }
}

export default App;
