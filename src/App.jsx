import { useState } from "react";
import "./App.css";
import Model from "./components/Model";
import Table from "./components/Table";

function App() {
  const [modelOpen,setModelOpen] = useState(false);
  const [rows,setRows] =useState([
    {EmployeeID :"1903",EmployeeFirstName :"jack",EmployeelastName :"Abdul",EmailAddress:"abdu12@gmail.com",Phonenumber:"7888148482",Address:"ongole bus stop",ZipCode:"657678",City:"kanigiri",Country:"India",Status:"live"},
    {EmployeeID :"1901",EmployeeFirstName :"john",EmployeelastName :"dukati",EmailAddress:"abdu12@gmail.com",Phonenumber:"317977779",Address:"ongole bus stop",ZipCode:"657678",City:"kanigiri",Country:"India",Status:"draft"},
    {EmployeeID :"1902",EmployeeFirstName :"Raheem",EmployeelastName :"Abdul",EmailAddress:"abdu12@gmail.com",Phonenumber:"356592946",Address:"ongole bus stop",ZipCode:"657678",City:"kanigiri",Country:"India",Status:"error"},
  
  ]);

  const[rowToEdit,setRowToEdit] = useState(null)

  const handleDeleteRow =(targetIndex) =>{
    setRows(rows.filter((_,idx)=> idx !== targetIndex));
  };
  const handleEditRow =(idx) =>{
    setRowToEdit(idx);
    setModelOpen(true);
  }
  const handleSubmit =(newRow) =>{
    setRows([...rows,newRow])
  }
 

  return (
    //<div className='ok'><h2>Jack Company</h2></div>
    <div className='App'>
      <div className='ok'><h2>Jack Company</h2></div>
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
      <button className='btn' onClick={()=>setModelOpen(true)}>Add</button>
      {modelOpen && <Model closeModal={() =>{
        setModelOpen(false);
      }} 
      onSubmit={handleSubmit}
      defaultvalue={rowToEdit !==null && rows[rowToEdit]}


      />}
      
    </div>
  );
  


}

export default App;
