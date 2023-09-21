import { useState } from 'react';
import '../assets/RotatingImage.css';

export default function RotatingImage({imageUrl}) {
    const [backgroundPosition, setBackgroundPosition] = useState('0%');

    function handleMouseMove(event) {
        const columnPortion = 1 / 15;
        const actualPortion = event.nativeEvent.offsetX / event.currentTarget.offsetWidth;
        const actualColumn = Math.floor(actualPortion / columnPortion);

        setBackgroundPosition((actualColumn / 14) * -100 + '%');
    }

    function handleMouseLeave() {
        setBackgroundPosition('0%');
    }

    return (
        <div className={"modelImageContainer"}>
            <div
                className={"modelImage"}
                onMouseMove={event => { handleMouseMove(event) }}
                onMouseLeave={handleMouseLeave}
                style={{
                    backgroundImage: 'url(' + imageUrl + ')',
                    backgroundPosition: backgroundPosition,
                }}
            />
        </div>
    );
}