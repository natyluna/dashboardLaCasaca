import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentRowUser from './ContentRowUser';
import User from './User';

function ContentWrapperUser(){

    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />                 
                    <ContentRowUser/>
                    <User />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapperUser;