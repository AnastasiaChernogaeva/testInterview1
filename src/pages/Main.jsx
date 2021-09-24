import React, {useCallback, useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import {TableFilterWithTable} from '../components/TableFilter.jsx';


export  const Main = () => {
    const [isClicked, setIsClicked] = useState(false)
   
    const handleChange =  useCallback(() =>{
        setIsClicked(prev => !prev)
    }, [setIsClicked] )

    const [servereUsers, setServereUsers] = useState([])
    const [users, setUsers] = useState(servereUsers)
    const [value, setValue] = useState('')


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            setServereUsers(users)
        }
            )
    }, [])

    const handleChangeInput = (e) => {
        if(e.target.value){
        let listOfUsers = users.filter(user=>user.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setUsers(listOfUsers)
        setValue(e.target.value)
        }
        else{
            setUsers(servereUsers)
            setValue(e.target.value)

        }
        

    }
    return(
        <div >
            {
                isClicked? (
                    <TableFilterWithTable onChange={handleChangeInput} users={users} value={value}/>
                ) : null

            }
            <Button onClick={handleChange}>
                New World
            </Button>
        </div>
    )
}