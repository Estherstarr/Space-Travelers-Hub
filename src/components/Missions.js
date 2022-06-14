import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

const missionsAPI = 'https://api.spacexdata.com/v3/missions';
fetch(missionsAPI).then((res) => res.json()).then((r) => console.log(r));

function Missions() {
  const data = [{
    name: 'Ayaan',
    age: 26
  }, {
    name: 'Ahana',
    age: 22
  }, {
    name: 'Peter',
    age: 40
  }, {
    name: 'Virat',
    age: 30
  }, {
    name: 'Rohit',
    age: 32
  }, {
    name: 'Dhoni',
    age: 37
  }];
  const columns = [{
    Header: 'Name',
    accessor: 'name'
  }, {
    Header: 'Age',
    accessor: 'age'
  }]

  return (
  
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={2}
        pageSizeOptions={[2, 4, 6]}
      />
    
  );
}

export default Missions;
