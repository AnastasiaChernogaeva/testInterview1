import React from "react";
import {DataTable} from "./Table.jsx"


export const TableFilterWithTable = ({onChange, users, value}) =>{

    const handleChange = (e) => {
        onChange(e)
    }

    return(
        <>
        <input type="text" placeholder=" Enter user name " onChange={handleChange} value={value}/>
        
        {
            users.length!==0?<DataTable users={users}/>:<p>No Users</p>
        }
        
        </>
    )

}