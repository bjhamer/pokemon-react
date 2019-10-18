import React from 'react'
import { useLocation } from 'react-router-dom'

const NoMatch = () => {
    let location = useLocation()
    return (
        <>
            <h2>
                No Match for <i>{location.pathname}</i>
            </h2>
        </>
    )
}

export default NoMatch