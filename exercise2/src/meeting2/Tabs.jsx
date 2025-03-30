import { useState } from "react";
import DataWithTable from './DataWithTable.jsx'
import Dropdown from './Dropdown.jsx'
import Content from "./Content.jsx";
import Accordion from "./Accordion.jsx";

function Tabs() {
    const [activeTab, setActiveTab] = useState('Dropdown')
    return(
        <>
        <ul className="nav nav-tabs">
        <li className="nav-item">
            <a className={`nav-link ${activeTab === 'Table' ? "active" : ""}`} href="#" onClick={() => setActiveTab('Table')}>Table</a>
        </li>
        <li className="nav-item">
            <a className={`nav-link ${activeTab === 'Dropdown' ? "active" : ""}`} href="#" onClick={() => setActiveTab('Dropdown')}>Dropdown</a>
        </li>
        <li className="nav-item">
            <a className={`nav-link ${activeTab === 'Biodata' ? "active" : ""}`} href="#" onClick={() => setActiveTab('Biodata')}>Biodata</a>
        </li>
        <li className="nav-item">
            <a className={`nav-link ${activeTab === 'Accordion' ? "active" : ""}`} href="#" onClick={() => setActiveTab('Accordion')}>Accordion</a>
        </li>
        </ul>
        <div className="tab-content">
            {activeTab === 'Table' ? <DataWithTable/> : ""}
            {activeTab === 'Dropdown' ? <Dropdown/> : ""}
            {activeTab === 'Biodata' ? <Content/> : ""}
            {activeTab === 'Accordion' ? <Accordion/> : ""}
        </div>
        </>
    )
}

export default Tabs;