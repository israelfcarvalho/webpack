import React, { useState } from 'react';

import webpackLogo from '../../assets/images/webpack-logo.png';
import "./style.scss";

export interface PropsHeader {
    title: string
}

const Header: React.FC<PropsHeader> = ({
    title
}) => {
    const [count, setCount] = useState(0);


    return (
        <header className="Header">
            {title}
            <img src={webpackLogo} alt="webpack logo"/>
        </header>
    )
}

export default Header;