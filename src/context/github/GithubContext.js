import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext()
export const GithubProvider = ({children}) => {
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(true)

    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q: text,
            // sort: 'created',
            // per_page: 18
        })

        const response = await fetch(`https://api.github.com/search/users?${params}`)
        const {items} = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: items,


        })
    }

    const getUser = async (login) => {
        setLoading()

        const response = await fetch(`https://api.github.com/users/${login}`)
        if (response.statue === 404) {
            window.location = '/notfound'
        } else {

            const data= await response.json()
            dispatch({
                type: 'GET_USER',
                payload: data,
    
    
            })
        }

    }

    const getUserRepos = async (login) => {
        setLoading()
        const params = new URLSearchParams({
            sort: 'created',
            per_page: 6,
        })

        const response = await fetch(`https://api.github.com/users/${login}/repos?${params}`)
        const data = await response.json()
        dispatch({
            type: 'GET_REPOS',
            payload: data,


        })
    }

    const clearUsers = () => dispatch({type: 'CLEAR_USERS'})


    // const fetchUsers = async () => {
    //     setLoading()

    //     const response = await fetch('https://api.github.com/users')
    //     const data = await response.json()
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data,


    //     })
    // }

    const setLoading = () => dispatch({type: 'SET_LOADING'})
    return <GithubContext.Provider value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
        user: state.user,
        repos: state.repos,
        getUser,
        getUserRepos

        
    }}>
        {children}
    </GithubContext.Provider>

}
export default GithubContext