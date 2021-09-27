import React, { useEffect, useState } from "react";
import {PlotlyData} from './PlotData.jsx'
import { metrics as mockMetrics } from "./metrics.js";

export const PlotDataContainer = () =>{
    const [metrics, setMetrics] = useState({})
    const [amount, setAmount] = useState(12)


    useEffect(()=>{
        //fetch
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => {
        //     serverUsers=users
        //     setUsers(users)
        // })
        setMetrics(mockMetrics)
    }, [])

    const handleAmountChange = (event) =>{
        setAmount(Number.parseInt(event.target.value))
    }

    return(
        <>
        <input type="number" min={0} onChange={handleAmountChange} />
        <PlotlyData data={metrics} amount={amount}/>
        </>
    )
}