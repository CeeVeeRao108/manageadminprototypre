import React, { useState } from "react";
import Td from './tabledata';
import L from './loading';
import Af from './activeFilter';
import If from './inactive';

export default function App() {
  const getInitialState = () => {
    const value = "Select";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
        <table className="  border  border-black">
        <tr>
          <th className="border  border-black w-36">Company Name</th>
          <th className="border  border-black w-36"><select value={value} onChange={handleChange}>
        <option value="1">All</option>
        <option value="2">Active</option>
        <option value="3">Overdue</option>
      </select></th>
          <th className="border  border-black w-36">Subscription Time</th>
        </tr>
        </table>
        {value === "1" && <Td/>}
        
        {value === "2" && <Af/>}
      
        {value === "3" && <If/>}
         
        
      
     {// <p>{`You selected ${value}`}</p>
      }
    </div>
  );
}