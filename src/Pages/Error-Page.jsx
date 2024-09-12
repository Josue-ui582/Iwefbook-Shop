import * as React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);
    return(
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className='font-bold text-2xl'>Oups !</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <i>
                {error.statusText || error.message}
            </i>
            <p className='mt-4xl '>
                <Link to="/">Go Back</Link>
            </p>
        </div>
    )
}

export default ErrorPage