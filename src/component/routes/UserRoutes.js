import React from 'react';

import {Route} from 'react-router-dom';
import {useSelector} from 'react-redux'
import Counter from './Counter';

const UserRouters = ({ children, ...rest}) => {
    const {user} = useSelector((state) => ({...state}))
    

    return user  ? (
        <Route {...rest} render={() => children} />
    ) : (
        <Counter />
    )
}


export default UserRouters;