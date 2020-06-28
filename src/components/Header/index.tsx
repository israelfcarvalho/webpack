import React from 'react';

import webpackLogo from '../../assets/images/webpack-logo.png';
import "./style.scss";

export interface PropsHeader {
    title: string
}

const Header: React.FC<PropsHeader> = ({
    title
}) => {
    return (
        <header className="Header">
            {title}
            <img src={webpackLogo} alt="webpack logo"/>
        </header>
    )
}

export default Header;