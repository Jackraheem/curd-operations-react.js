import React from 'react'
import './Table.css'
import {BsFillTrashFill,BsFillPencilFill} from "react-icons/bs";

const Table = ({ rows,deleteRow,editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
            <tr>
                <th>Employee ID</th>
                <th>Employee First Name</th>
                <th> Employee last Name</th>
                <th className='expand'>Email Address</th>
                <th>Phone number</th>
                <th className='expand'>Address</th>
                <th>Zip Code</th>
                <th>City</th>
                <th className='expand'>country</th>
                <th>Status</th>
                <th>Action</th>

            </tr>

        </thead>
        <tbody>
          {
            rows.map((row,idx)=>{
              // const statusText = row.Status.charAt[0].toUpperCase() + row.Status.slice(1);
              return <tr key={idx}>
                <td>{row.EmployeeID}</td>
                <td>{row.EmployeeFirstName}</td>
                <td>{row.EmployeelastName}</td>
                <td>{row.EmailAddress}</td>
                <td>{row.Phonenumber}</td>
                <td className="expand">{row.Address}</td>
                <td>{row.ZipCode}</td>
                <td>{row.City}</td>
                <td>Country</td>
                <td>
                  <span className={`label label-${row.Status}`} >{row.Status}</span>
                </td>
                <td><span className="actions">
            <BsFillTrashFill className="delete-btn"  onClick={() => deleteRow(idx)} />
            <BsFillPencilFill onClick={() =>{
              editRow(idx)
            }}/>
            </span>
            </td>
              </tr>
            })
          }
    
  

        </tbody>
      </table>
    </div>
  )
}

export default Table
