import React from 'react';
import { useUser } from '../hooks/useUsers';
import UserList from './UserList';

function UsersInDb(){

   const {usuarios}= useUser();
   let datos= [];
   if (usuarios) {
     datos= usuarios;
   }

    return(
        <React.Fragment>
                 {/*<!-- USERS LIST -->*/}
					<h1 className="h3 mb-2 ml-4 text-gray-800">Listado de Usuarios</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
									<thead>
										<tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Email</th>
                                            <th>Genero</th>
                           
										</tr>
                                    {
                                    
                                        datos.map((key, index) => {
                                        return <UserList item={key} key={index} />;
                                        })
                                
                                    }
									</thead>								
									<tbody>
										
										
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
			
			
        
    )
}
export default UsersInDb;