import Card from 'react-bootstrap/Card';
import RotatingImage from "./RotatingImage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import '../styles/ModelCard.css';
import {Container} from "react-bootstrap";

export default function ModelCard({modelData, handleClick })
{
    function getRandomInt(maxValue) {
        return Math.floor(Math.random() * maxValue);
    }

    return (
        <Card
            className={"modelCard h-100"}
            id={modelData.id}
            onClick={handleClick}
        >
            <RotatingImage imageUrl={modelData.imageUrl}/>
            <Card.Body className={"p-2"}>
                <Container fluid className={"px-0 d-flex align-items-center justify-content-between"}>
                    <img
                        className={"profileImage d-inline-block float-start"}
                        src={ "https://static.vecteezy.com/system/resources/thumbnails/010/260/479/small/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg" }
                        alt={"User profile"}
                    />
                    <span className={"text-truncate"}>{ modelData.title }</span>
                </Container>
            </Card.Body>
            <Card.Footer>
                <Container fluid className={"px-0 d-flex align-items-center justify-content-between"}>
                    <span>
                        <FontAwesomeIcon icon={icon({name: 'eye', family: 'classic', style: 'regular'})} /> { getRandomInt(10000) }
                    </span>
                    <span>
                        <FontAwesomeIcon icon={icon({name: 'heart', family: 'classic', style: 'regular'})} /> { getRandomInt(500) }
                    </span>
                        <FontAwesomeIcon icon={icon({name: 'comments', family: 'classic', style: 'regular'})} />
                        <FontAwesomeIcon icon={icon({name: 'download', family: 'classic', style: 'solid'})} />
                </Container>
            </Card.Footer>
        </Card>
    );
}