import Card from 'react-bootstrap/Card';
import RotatingImage from "./RotatingImage";
import '../assets/ModelCard.css';

export default function ModelCard({ modelData })
{
    return (
        <Card className={"modelCard h-100"}>
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
                        <span className={""}>{ modelData.modelTitle }</span>
                    </div>
                </div>
                {/*<Card.Title>Card Title</Card.Title>*/}
                {/*<Card.Text>*/}

                {/*</Card.Text>*/}
                {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
            <Card.Footer></Card.Footer>
            {/*<ThreeCanvas initialRotation={{ x: 0.0, y: 1.0 }}/>*/}
            {/*<ThreeCanvas initialRotation={{ x: 0.5, y: 0.5 }}/>*/}
            {/*<ThreeCanvas initialRotation={{ x: 1.5, y: 4.5 }}/>*/}
            {/*<ThreeCanvas initialRotation={{ x: 2.5, y: 3.5 }}/>*/}
            {/*<ThreeCanvas initialRotation={{ x: 3.5, y: 2.5 }}/>*/}
            {/*<ThreeCanvas initialRotation={{ x: 4.5, y: 1.5 }}/>*/}
        </Card>
    );
}

