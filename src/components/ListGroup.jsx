import React from "react";
function ListGroup() {
    const villes = ['Tunis', 'Soussa', 'Touzir', 'Sfax', 'Sidi bouzid', 'Tataouine'];
    const villesStartWithS = villes.filter(ville => ville.startsWith("S"));
    return (
        <>
            <h1>List Group</h1>
            {villes.length === 0 && <p>Liste vide</p>}
            {/*  <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
    </ul>*/}
            <ul className="list-group">
                {villes.map((ville, index) => (<li key={index}>{ville}</li>))}
            </ul>
            <h1>Les villes commance par S</h1>
            <ul>
                {villesStartWithS.map(ville => (<li key={ville}>{ville}</li>))}
            </ul>

        </>
    );
}
export default ListGroup;