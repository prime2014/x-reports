import React, { useRef } from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import Navbar from '../../common/Navbar';
import { Card } from 'primereact/card';

export default function Report() {
    
    const items = [
        { label: 'Dashboard', icon: 'pi pi-home' },
        { label: 'X-Reports', icon: 'pi pi-chart-line' },
        { label: 'Z-Reports', icon: 'pi pi-list' },
        { label: 'Periodical Reports', icon: 'pi pi-inbox' }
    ];

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
                            <span className="text-400" style={{ color:"lightblue", fontSize:"13px" }}>Generate Report <span style={{ fontSize:"13px" }} className='pi pi-arrow-right'></span></span>
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
                            <span className="text-400" style={{ color:"lightblue", fontSize:"13px" }}>Generate Report <span style={{ fontSize:"13px" }} className='pi pi-arrow-right'></span></span>
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
                            
                            <span className="text-400" style={{ color:"lightblue", fontSize:"13px" }}>Generate Report <span style={{ fontSize:"13px" }} className='pi pi-arrow-right'></span></span>
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