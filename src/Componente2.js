import React, { useState, useEffect } from 'react';
import './Componente2.css';
import {Item} from './Item';

export const Componente2 = () => {

    const [lista, setLista] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setLista(['React', 'Angular', 'Fluter', 'Kotlin', 'C#', 'Phyton'])
        }, 5000);
    })


    return (
        <div>
            <h1 className="azul">Meu primeiro componente de função</h1>
            <ul>
                {lista.map((item, indice) => <Item value={item} index={indice} />)}
            </ul>
        </div>
    );
}