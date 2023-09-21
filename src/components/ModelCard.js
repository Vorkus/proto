import Card from 'react-bootstrap/Card';
import '../assets/ModelCard.css';
import RotatingImage from "./RotatingImage";

export default function ModelCard()
{
    return (
        <Card className={"modelCard p-4 m-4"}>
            <RotatingImage />
            <Card.Body>
                {/*<StepRange />*/}
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

