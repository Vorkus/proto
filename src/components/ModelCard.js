import Card from 'react-bootstrap/Card';
import RotatingImage from "./RotatingImage";

export default function ModelCard()
{
    return (
        <Card className={"modelCard p-4 m-4"}>
            <RotatingImage
                imageUrl="https://media.sketchfab.com/models/fc6e731a0131471ba8e45511c7ea9996/fallbacks/f2b85e1fbe0e4133b53d9e91ccb076eb/3a12f4d7a66f49cba11ea349a41356c3.jpeg"
            />
            <Card.Body>
                {/*<Card.Title>Card Title</Card.Title>*/}
                {/*<Card.Text>*/}

                {/*</Card.Text>*/}
                {/*<Button variant="primary">Go somewhere</Button>*/}
            </Card.Body>
            {/*<ThreeCanvas initialRotation={{ x: 0.0, y: 1.0 }}/>*/}
            {/*<ThreeCanvas initialRotation={{ x: 0.5, y: 0.5 }}/>*/}
            {/*<ThreeCanvas initialRotation={{ x: 1.5, y: 4.5 }}/>*/}
            {/*<ThreeCanvas initialRotation={{ x: 2.5, y: 3.5 }}/>*/}
            {/*<ThreeCanvas initialRotation={{ x: 3.5, y: 2.5 }}/>*/}
            {/*<ThreeCanvas initialRotation={{ x: 4.5, y: 1.5 }}/>*/}
        </Card>
    );
}

