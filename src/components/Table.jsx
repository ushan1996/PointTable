import React from 'react'
import styled, { ThemeProvider } from "styled-components";
const Tablee = styled.table`
    border: 2px solid black;
    width: 100%;
    height: 200px;
`;
function Table() {
    const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male"},
      ]
  return (
    <div>
    <Container>
     <Tablee>
        <tr>
          <th>Name</th>
          <th>Random</th>
          <th>Link</th>
          <th>Point</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td>{val.gender}</td>
            </tr>
          )
        })}
      </Tablee>
      </Container>
    </div>
  )
}

export default Table
