import React from 'react'
import "./table.css";


function Table() {
    const data = [
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Megha", randomnumber: 19, link: "Female" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
        { name: "Subham", randomnumber: 25, link: "Male" , point: "32" },
      ]
  return (
    <div className='root'> 
    
    <div className="header"><h1>Task 1</h1></div>
    <div className='container'> 
     <table>
        <tr>
          <th>Name</th>
          <th>Random</th>
          <th >Link</th>
          <th className='colpoint'>Point</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.randomnumber}</td>
              <td><a href={val.link}>{val.link}</a> </td>
              <td className='inputpoints'><input type="text" />&nbsp;&nbsp;&nbsp;<input type="submit" /> </td>
            </tr>
          )
        })}
      </table>
    </div>
    </div>
  )
}

export default Table
