import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'

const Counter = () => {
    const [count, setcount] = useState(5)
    let history = useHistory()

    useEffect(() => {
        const interval = setInterval(() => {
            setcount((current) => --current)
        },1000)
        count === 0 && history.push("/");
        return() => clearInterval(interval)
    }, [count])

    return(
        <div className="container p-5 text-center">
            <p>Redirecting you to {count} seconds</p>
        </div>
    )

}

export default Counter
