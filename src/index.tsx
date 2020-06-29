import React from 'react';
import ReactDOM from 'react-dom';

import ContentWrapper from './components/ContentWrapper';
import Header from './components/Header';

const root = document.getElementById("app");

ReactDOM.render(
    <ContentWrapper 
        topbarContent={<Header title="Header in ContentWrapper"/>}
        content="Content"
    />,
    root
);