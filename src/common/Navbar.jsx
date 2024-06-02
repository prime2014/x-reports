import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';  
import IsaleLogo from "../images/isale_inverted.jpg";


export default function Navbar(props) {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items = [
        {
            label: 'Reports Section',
        },
    
    ];

    const start = <img alt="logo" src={IsaleLogo} height="40" className="mr-2"></img>;
    

    return (
        <div className="card">
            <Menubar model={items} start={start}  />
            <div>
                {props.children}
            </div>
        </div>
    )
}