import React from 'react';

import './style.scss'

export interface PropsContentWrapper {
    topbarContent: React.ReactNode,
    leftSidebarContent?: React.ReactNode,
    rigthSidebarContent?: React.ReactNode,
    bottombarContent?: React.ReactNode,
    content: React.ReactNode
}

const ContentWrapper: React.FC<PropsContentWrapper> = ({
    content,
    topbarContent,
    bottombarContent,
    leftSidebarContent,
    rigthSidebarContent
}) => {

    return (
        <div className="ContentWrapper">
            <div className="ContentWrapper__topbar">
                {topbarContent}
            </div>
            <div className="ContentWrapper__middleContent">
                {leftSidebarContent && (
                    <div className="ContentWrapper__middleContent__leftSideBar">
                        {leftSidebarContent}
                    </div>
                )}
                <div className="ContentWrapper__middleContent__content">
                    {content}
                </div>
                {rigthSidebarContent && (
                    <div className="ContentWrapper__middleContent__rightSideBar">
                        {rigthSidebarContent}
                    </div>

                )}
            </div>
            {bottombarContent && (
                <div className="ContentWrapper__bottombar">
                    {bottombarContent}
                </div>
            )}
        </div>
    )
}


export default ContentWrapper;