import React, {useCallback, useEffect, useState} from "react";

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
        <div><p onClick={handleChange}>
            {
                isClicked? 'Buy World!' : 'Hello World!'

            }
            </p>
        </div>
    )
}