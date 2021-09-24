import React, {useCallback, useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import {DataTable} from '../components/Table.jsx';


export  const Main = () => {
    const [isClicked, setIsClicked] = useState(false)
   
    //первый вариант
    // const handleChange = () =>{
    //     setIsClicked(prev => !prev)
    // }

    //помогает постоянно не переопределять эту функцию! - это оптимизация
    const handleChange =  useCallback(() =>{
        setIsClicked(prev => !prev)
    }, [setIsClicked] )
    return(
        <div >
            {
                isClicked? null : <DataTable/>

            }
            <Button onClick={handleChange}>
                New World
            </Button>
            {/* <DataTable/> */}
        </div>
    )
}