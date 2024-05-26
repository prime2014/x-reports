import React, { useRef, useState, useLayoutEffect } from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import Navbar from '../../common/Navbar';
import { Card } from 'primereact/card';

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Calendar } from "primereact/calendar";
import { reportApi } from "../../services/report.service";


const DialogBox = (props) => {
    // const [visible, isVisible] = useState(false)
    const [value, setValue] = useState("date")
    const [dateFrom, setDateFrom] = useState(null);
    const [dateTo, setDateTo] = useState(null);
    const [type, setType] = useState("date")
    const [loading, setLoading] = useState(false)

    const setFilterValue = (event) => {
        setValue(event.target.value)
    }

    useLayoutEffect(()=>{
        let mynewdate = new Date(dateFrom).toISOString()
        console.log(mynewdate)
        let date_to = new Date(dateTo).toISOString()

        // date_to = intlDateObject.format(date_to)
        console.log(date_to)
    })

    const generatePeriodical = async () => {
        setLoading(true)
        try {
            
            let periodical = await reportApi.getPeriodicalReports(type, dateFrom, dateTo);
            console.log(periodical)
            const filename = "periodical.pdf";
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(periodical);
            link.download = filename;

            // Append the link to the body
            document.body.appendChild(link);

            // Trigger the download
            link.click();
            setLoading(false)
            // Clean up
            document.body.removeChild(link);
            window.URL.revokeObjectURL(link.href);
        } catch(error) {
            setLoading(false)
            return error;
        }
    }

    const resetDefault = () => {
        setDateFrom(null)
        setDateTo(null)
        props.changeVisible(false)
    }

    return (
        <div className="card flex justify-content-center">
            <Dialog header="Periodical Report" visible={props.visible} style={{ width: '50vw' }} onHide={resetDefault}>
                <div>
                    <div className='input-group'>
                        <label htmlFor='filter-by'>Choose filter mode</label>
                        <select onChange={setFilterValue} style={{ display:"block", width:"100%", height:"40px" }} value={value}>
                            <option value="date">Filter by date</option>
                        </select>
                    </div>
                    <div className='input-group'>
                        <div>
                            <p>Date from:</p>  
                            <Calendar style={{ width:"100%" }} local="en"  value={dateFrom} onChange={(e)=> setDateFrom(e.value)} dateFormat='yy-mm-dd' showTime hourFormat="24" showIcon/>
                        </div>
                    </div>

                    <div className='input-group'>
                        <div>
                            <p>Date to:</p>  
                            <Calendar style={{ width:"100%" }} locale='en'  value={dateTo} onChange={(e)=> setDateTo(e.value)} dateFormat='yy-mm-dd' showTime hourFormat="24" showIcon/>
                        </div>
                    </div>

                    <div className='input-group'>
                        <Button disabled={dateFrom === null || dateTo === null} loading={loading} onClick={()=>generatePeriodical()} style={{ width:"100%" }} label='Print Report' />
                    </div>
                </div>
            </Dialog>
        </div>
    )
}


const ZReport = (props) => {

    const [loading, setLoading] = useState(false)

    const getZReport = async () => {
        setLoading(true)
        try {
            
            let z_report = await reportApi.generateZ();
            console.log(z_report)
            const filename = "zreport.pdf";
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(z_report);
            link.download = filename;

            // Append the link to the body
            document.body.appendChild(link);

            // Trigger the download
            link.click();
            setLoading(false)
            // Clean up
            document.body.removeChild(link);
            window.URL.revokeObjectURL(link.href);
        } catch(error) {
            setLoading(false)
            return error;
        }
    }
    return (
        <div className="card flex justify-content-center">
            <Dialog header="Z Report" visible={props.visible} style={{ width: '50vw' }} onHide={() => props.displayZdialog()}>
                <p>This action will generate the Z-Report of Today</p>
                <Button loading={loading} onClick={getZReport} label='Print Z Report' style={{ width: "100%" }} />
            </Dialog>
        </div>
    )
}

const XReport = (props) => {

    const [loading, setLoading] = useState(false)

    const getXReport = async () => {
        setLoading(true)
        try {
            
            let x_report = await reportApi.generateX();
            console.log(x_report)
            const filename = "xreport.pdf";
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(x_report);
            link.download = filename;

            // Append the link to the body
            document.body.appendChild(link);

            // Trigger the download
            link.click();
            setLoading(false)
            // Clean up
            document.body.removeChild(link);
            window.URL.revokeObjectURL(link.href);
        } catch(error) {
            setLoading(false)
            return error;
        }
    }
    return (
        <div className="card flex justify-content-center">
            <Dialog header="X Report" visible={props.visible} style={{ width: '50vw' }} onHide={() => props.displayXdialog()}>
                <p>This action will close your current shift and generate the x report</p>
                <Button loading={loading} onClick={getXReport} label='Print X Report' style={{ width: "100%" }} />
            </Dialog>
        </div>
    )
}

export default function Report() {
    const [visible, setVisible] = useState(false)
    const [zVisible, setZVisible] = useState(false)
    const [xVisible, setXVisible] = useState(false)

    
    const items = [
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'X-Reports', icon: 'pi pi-chart-line' },
        { label: 'Z-Reports', icon: 'pi pi-list' },
        { label: 'Periodical Reports', icon: 'pi pi-inbox' }
    ];

    const handleVisible = (value) => {
        setVisible(value)
    }

    const displayZdialog = () => setZVisible(false)

    const displayXdialog = () => setXVisible(false)


    const generateZReport = () => setZVisible(true)

    const generateXReport = () => setXVisible(true)


    const showDialog = () => setVisible(true);

    return (
        <Navbar>
            <div className="templateBody">
                {/* <div>
                    <TabMenu model={items} />
                </div> */}
                <div>
                    <h1>Welcome First Assurance</h1>
                </div>
                <div className="grid">
                    <DialogBox visible={visible} changeVisible={handleVisible} />
                    <ZReport visible={zVisible} displayZdialog={displayZdialog}/>
                    <XReport visible={xVisible} displayXdialog={displayXdialog} />
                    <div className="col-12 md:col-6 lg:col-3">
                        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">X-Reports</span>
                                    <div className="text-900 font-medium text-xl">152</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-blue-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-chart-bar text-blue-500 text-xl"></i>
                                </div>
                            </div>
                            {/* <span className="text-green-500 font-medium">24 new </span> */}
                            <span onClick={generateXReport} className="text-400 action" style={{ color:"lightblue", fontSize:"13px", cursor: "pointer" }}>Generate Report <span style={{ fontSize:"13px" }} className='pi pi-arrow-right'></span></span>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Z-Reports</span>
                                    <div className="text-900 font-medium text-xl">$2.100</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-orange-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-chart-line text-orange-500 text-xl"></i>
                                </div>
                            </div>
                            {/* <span className="text-green-500 font-medium">%52+ </span> */}
                            <span onClick={generateZReport} className="text-400 action" style={{ color:"lightblue", fontSize:"13px", cursor: "pointer" }}>Generate Report <span style={{ fontSize:"13px" }} className='pi pi-arrow-right'></span></span>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Periodical Reports</span>
                                    <div className="text-900 font-medium text-xl">28441</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-cyan-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-history text-cyan-500 text-xl"></i>
                                </div>
                            </div>
                            
                            <span onClick={showDialog} className="text-400 action" style={{ color:"lightblue", fontSize:"13px", cursor: "pointer" }}>Generate Report <span style={{ fontSize:"13px" }} className='pi pi-arrow-right'></span></span>
                        </div>
                    </div>
                    <div className="col-12 md:col-6 lg:col-3">
                        <div className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Other Reports</span>
                                    <div className="text-900 font-medium text-xl">152 Unread</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-purple-100 border-round" style={{ width: '2.5rem', height: '2.5rem' }}>
                                    <i className="pi pi-file text-purple-500 text-xl"></i>
                                </div>
                            </div>
                            <span className="text-green-500 font-medium">85 </span>
                            <span className="text-400">responded</span>
                        </div>
                    </div>
                </div>
    
            </div>
        </Navbar>
    )
}