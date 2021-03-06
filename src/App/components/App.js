import React, { Component } from 'react';
import { Collapse } from 'antd';

import './App.css';
import Temperature from './../../Temperature/components/Temperature';
import Distance from './../../Distance/components/Distance';
import Weight from './../../Weight/components/Weight';

const Panel = Collapse.Panel;

class App extends Component {
  render() {
    return (
        <div className='container'>
            <div className="page-header">
                <h3>Measure Calculator</h3>
            </div>

            <div className="row">
                <div className="col-sm-12">
                    <Collapse accordion>
                        <Panel header="Calculate Temperature" key="1">
                            <Temperature />
                        </Panel>
                        <Panel header="Calculate Distance" key="2">
                            <Distance />
                        </Panel>
                        <Panel header="Calculate Weight" key="3">
                            <Weight />
                        </Panel>
                    </Collapse>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
