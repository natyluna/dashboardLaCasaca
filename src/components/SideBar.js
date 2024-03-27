import React from 'react';
import image from '../assets/images/logo.png';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" style={{background:'#072e51'}}>

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img  width="80" height="80" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - La Casaca</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Productos -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/product">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Usuarios -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/user">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Usuarios</span></a>
                </li>

                {/*<!-- Nav Item - Api User -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="http://localhost:8002/users/api/usuarios">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Api Usuarios</span></a>
                </li>

                {/*<!-- Nav Item - Api Product -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="http://localhost:8002/api/productos">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Api Productos</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;