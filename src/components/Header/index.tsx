import React from 'react';

import "./style.scss";

export interface PropsHeader {
    title: string
}

const Header: React.FC<PropsHeader> = ({
    title
}) => {
    return (
        <header className="Header">{title}</header>
    )
}

export default Header;