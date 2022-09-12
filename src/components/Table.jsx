
import React, { Component } from 'react';
import "./table.css";
function Table() {
    var heading = ['Name', 'Random', 'Link', 'Point'];
    var body =
        [['Kapil', 11, 'https://create-react-app.dev/docs/getting-started/','32'],
        ['Aakash', 22, 'https://create-react-app.dev/docs/getting-started/','21'],
        ['Mani', 33, 'https://create-react-app.dev/docs/getting-started/','23'],
        ['Yash', 44, 'https://create-react-app.dev/docs/getting-started/','43']
        ];
    const data = [
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
        { name: "Anom", randomnumber: 19, link: "https://create-react-app.dev/docs/getting-started/" , point: "32" },
      
      ]
  return (
    <div className='root'> 
        <div className="header"><h1>Task 1</h1></div>
        <div className='container'> 
            <table>
                <tr>   
                    {heading.map(head => <th>{head}</th>)}
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
                {/* <tbody>
                    {body.map(row => <TableRow row={row} />)}
                </tbody> */}
      </table>
    </div>
    </div>
  )
}

class TableRow extends Component {
    render() {
        var row = this.props.row;
        return (
            <tr>
                {row.map(val => <td>{val}</td>)}
            </tr>
        )
    }
}
export default Table
