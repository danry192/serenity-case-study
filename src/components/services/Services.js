import React from 'react';
//import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
import '../../styles/Services.css';
import { Collapse } from 'antd';

const { Panel } = Collapse;


function ServicesTabs() {
  return (
    <div className="block_ServicesBlock">
      <div className="container-fluid">
        <Collapse accordion>
          <Panel className="collapseHeader" header="Companionship Care" key="1">
            <p className="content">Companionship care is when...</p>
          </Panel>

          <br></br>

          <Panel className="collapseHeader" header="Home Care" key="2">
            <p className="contet">text</p>
          </Panel>

          <br></br>

          <Panel className="collapseHeader" header="Medicine and Management Care" key="3">
            <p className="content">Medicine and Management care is for those who need additional support in keeping track of taking their perscriptions, obtaining them and more.</p>
          </Panel>
          
        </Collapse>
      </div>
    </div>
  )
}

export default ServicesTabs;


