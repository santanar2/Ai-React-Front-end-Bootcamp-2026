import { Fragment } from "react/jsx-runtime";

export function List() {
    return (
        <Fragment>
            <h1>Feira | Lista de compras</h1>
            <img
                className="image"
                src="https://www.fflch.usp.br/sites/fflch.usp.br/files/inline-images/Banca%20de%20legumes%2C%20feira%20da%20Parada%20Inglesa.jpg"
                alt="Feira"
            />
            <ul>
                <li>Banana</li>
                <li>Maçã</li>
                <li>Laranja</li>
                <li>Uva</li>
                <li>Manga</li>
                <li>Abacaxi</li>
            </ul>
        </Fragment>
    );
}
