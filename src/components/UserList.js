import React from 'react';

function Usuario({item}){

    return (
        <React.Fragment>
                <tr>
				<td>{item.id}</td>
				<td>{item.name}</td>
				<td>{item.email}</td>
				<td>{item.genero}</td>
			</tr>    
        </React.Fragment>
    )

}
export default Usuario;