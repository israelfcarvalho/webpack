import React from 'react';
import ContentWrapper from './components/ContentWrapper';
import Header from './components/Header';
import { hot } from 'react-hot-loader/root';

const App: React.FC = () => {
    return (
        <ContentWrapper
            topbarContent={<Header title="Header in ContentWrapper" />}
            content="Content"
        />
    )
}

export default hot(App);