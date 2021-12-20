import React, {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'

function UserSearch() {
    const [text, setText] = useState('')
    const {users} = useContext(GithubContext)
    const changeHandler = (e) => setText(e.target.value)
    const submitHandler = (e) => {
        e.preventDefault()
        if(text === '') {
            alert('Please enter something')
        } else {
            // @todo - search users
            setText('')
        }
    }
    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div className=''>
                <form onSubmit={submitHandler}>
                    <div className='form-control'>
                        <div className='relative'>
                            <input type='text' className='w-full bg-gray-200 pr-40 input input-lg  text-black'
                            placeholder='Search' value={text} onChange={changeHandler} />
                            <button type='submit' 
                            className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg bg-success' >
                                Go
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            {users.length > 0 && (
                <div className=''>
                <button className='btn btn.ghost  btn-lg'>
                    Clear

                </button>
            </div>
            )}
            
        </div>
    )
}

export default UserSearch
