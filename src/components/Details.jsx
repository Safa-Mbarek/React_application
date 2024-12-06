import React from "react";
import PropTypes from "prop-types";
Details.defaultProps = {

    qualif: "champion",
    isActif: true,
    age: 99,
};


function Details(props) {
    const { qualif, age, isActif } = props.champion;
    return (
        <>
            <ul className="list-group">
                <li class="list-group-item" key="qualif">
                    <strong>{qualif}</strong>
                </li>
                <li class="list-group-item" key="age">
                    <strong>age:</strong>
                    {age}
                </li>
                <li class="list-group-item" key="isActif">
                    <strong>Encore actif :</strong>
                    {isActif ? "oui" : "non"}
                </li>
                <li class="list-group-item"><a href="#" class="btn btn-primary">Biographie</a> </li>
                <li class="list-group-item"><a href="#" class="btn btn-primary">Carriére professionnelle</a> </li>
            </ul>
        </>

    )
}
export default Details;