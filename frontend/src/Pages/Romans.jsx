import React from 'react';
import NavBar from "../Components/NavBar";
import { Link } from 'react-router-dom';

const Romans = () => {
    return(
        <section>
            <NavBar />
            <div className='h-100 flex justify-center items-center'>
                <div className='flex flex-col items-center gap-8 flex-wrap'>
                    <h1 className='text-text-3xl text-center'>Soory! les Romans et Harlequins ne sont pas disponibles pour le moment.</h1>
                    <p className='text-text-base text-white bg-blue p-4 rounded-xl'>
                        <Link to="/">Retourner à la page d'accueil</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Romans;