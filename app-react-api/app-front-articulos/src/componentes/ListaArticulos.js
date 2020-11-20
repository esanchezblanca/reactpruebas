import React, { useState } from 'react';

export default props => {
    //No existe this. porque no es clase
    //[nombre de la variable, setter variable]
    let [arrayArticulos, setArrayArticulos] = useState(new Array);

    fetch('http://localhost:4000/api/articulos')
        .then(res => res.json())
        .then(arrayData => {
            setArrayArticulos(arrayData);
        });

    return( <section>
        <h1>Articulos</h1>
        {arrayArticulos.map((art) => {
            return (
                <article>
                    {art.titulo}
                </article>);
        })}
    </section>
    );
};