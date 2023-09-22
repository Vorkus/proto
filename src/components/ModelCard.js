import Card from 'react-bootstrap/Card';
import RotatingImage from "./RotatingImage";
import '../assets/ModelCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function ModelCard({id, modelData, handleClick })
{
    return (
        <Card
            className={"modelCard h-100"}
            id={id}
            onClick={handleClick}
        >
            <RotatingImage
                imageUrl={ modelData.imageUrl }
            />
            <Card.Body
                className={"py-2"}
            >
                <div className={"row"}>
                    <div className={"col p-0 px-2 d-flex align-items-center justify-content-between"}>
                        <img
                            className={ "profileImage d-inline-block float-start" }
                            src={ "https://static.vecteezy.com/system/resources/thumbnails/010/260/479/small/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg" }
                            alt={"User profile"}
                        />
                        <span className={"text-truncate"}>{ modelData.title }</span>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className={"d-flex justify-content-between"}>
                <span>
                    <FontAwesomeIcon icon={icon({name: 'eye', family: 'classic', style: 'regular'})} /> { getRandomInt(10000) }
                </span>
                <span>
                    <FontAwesomeIcon icon={icon({name: 'heart', family: 'classic', style: 'regular'})} /> { getRandomInt(500) }
                </span>
                <span>
                    <FontAwesomeIcon icon={icon({name: 'comments', family: 'classic', style: 'regular'})} />
                </span>
                <span>
                    <FontAwesomeIcon icon={icon({name: 'download', family: 'classic', style: 'solid'})} />
                </span>
            </Card.Footer>
        </Card>
    );
}

function getRandomInt(maxValue) {
    return Math.floor(Math.random() * maxValue);
}
