import React from "react";
import Details from "./Details";
Card.defaultProps = {
    nom: "Nom du Champion",
    imageSrc: "./public/champion.png",
    qualif: "champion",
    isActif: true,
    age: 99,
};
function Card(props) {
    let champ = { qualif: props.qualif, age: props.age, isActif: props.isActif };
    return (
        <>
            <div className="col">
                < div className="card h-1000">
                    <h5 class="card-title">{props.nom}</h5>
                    <img src={props.imageSrc} className="card-img-top" />
                    <div className="card-body">
                        <Details champion={champ} />

                    </div>

                </div>
            </div>
        </>
    )
}
export default Card;