import React, {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'

import GithubContext from '../context/github/GithubContext'


function User() {
    const params = useParams()
    const {getUser, user} = useContext(GithubContext)
    useEffect(() => {
        getUser(params.login)
        
    }, [params])

    
    return (
        <div>{user.login}
            
        </div>
    )
}

export default User
