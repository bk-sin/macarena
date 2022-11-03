import {Container} from "react-bootstrap";
import MultipleRows from "./MultipleRows";


export default function Carousels() {
    return (
        <div className="carrusel-padre">
            <h2 className="popular">Popular MyTineraries</h2>
            <Container className="tarjetas"><MultipleRows /></Container>
        </div>
    );
}
