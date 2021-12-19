import React, {useEffect, useState} from 'react'
import Spinner from '../layers/Spinner'

function UserResults() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchUsers()
        
    }, [])

    const fetchUsers = async () => {
        const response = await fetch('https://api.github.com/users')
        const data = await response.json()
        setUsers(data)
        setLoading(false)
    }
    return (<>
        {loading ? (
            <h1><Spinner /></h1>

        ) : (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map(user => (
                <h2>{user.login}</h2>
            ))}
            
        </div>

        )}
        </>
        
    )
}

export default UserResults
