import React from 'react';

const  ArhiveUsers = ( {arhiveUsers} ) => {
    return ( 

        <div>
             <table class="table table-ligth table-striped">
          <thead>
            <tr>
              <th scope="col">ID пользователя</th>
              <th scope="col">Имя</th>
              <th scope="col">Качество</th>
              <th scope="col">Профессия</th>
              <th scope="col">Оценка</th>
              <th>Колл-во пользователей в архиве : {arhiveUsers.length} </th>
            </tr>
          </thead>
          <tbody>
            {arhiveUsers.map((user) => (
              <tr key={user}>
                <td>{user._id}</td>
                <td className="">{user.name}</td>
                <td className="td_table">{user.qualities}</td>
                <td className="">{user.profession}</td>
                <td className="">{user.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
     );
}
 
export default ArhiveUsers;