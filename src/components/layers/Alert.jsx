import React, {useContext} from 'react'
import { FaExclamationCircle } from 'react-icons/fa'

import AlertContext from '../../context/alert/AlertContext'


function Alert() {
    const {alert} = useContext(AlertContext)
    return alert !== null && (
        <p className='flex items-start mb-4 space-x-2 bg-warning p-4 rounded-md'>
            {alert.type === 'error' && (
                <div className=' mx-4 flex-none mt-0.5 bg-warning'>

                <FaExclamationCircle />
                </div>
            )}
            {alert.msg}
        </p>
    )
}

export default Alert
