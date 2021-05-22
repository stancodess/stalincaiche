import React from 'react';
import illustration from '../imgs/Scrum_board.svg';
import Form from './contact.form';

export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-purple-700 text-6xl">¡Hola! Soy Stalin</h1>
                    <p className="text-xl font-light">Apasionado del código.</p>
                </div>
                <img src={illustration} alt="Scrum Board" style={{ height: "300px" }}></img>
            </div>
            <div>
                <Form />
            </div>
        </div>
    </header>
)