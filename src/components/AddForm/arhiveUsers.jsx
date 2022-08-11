import React from 'react';

const  ArchiveUsers = ( {arсhiveUsers} ) => {

  const count = arсhiveUsers.length;
  
  const archiveIsEmpty = () => {
    return '';
  };
    return ( 
        <div>
          {count === 0 ? (
            archiveIsEmpty()
          ):
             <table className="table table-ligth table-striped">
          <thead>
            <tr>
              <th scope="col">ID пользователя</th>
              <th scope="col">Имя</th>
              <th scope="col">Качество</th>
              <th scope="col">Профессия</th>
              <th scope="col">Оценка</th>
              <th>Колл-во пользователей в архиве : {count} </th>
            </tr>
          </thead>
          <tbody>
            {arсhiveUsers.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td className="">{user.name}</td>
                <td className="td_table">{user.qualities}</td>
                <td className="">{user.profession}</td>
                <td className="">{user.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
}
    </div>
     );
}
 
export default ArchiveUsers;