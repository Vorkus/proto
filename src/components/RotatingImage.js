import { useState } from 'react';
import '../styles/RotatingImage.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function RotatingImage({imageUrl, isAnimated}) {
    const [backgroundPosition, setBackgroundPosition] = useState('0%');

    let animationTag;
    if (isAnimated) {
        animationTag =
            <div className={"animation-tag ms-2 mt-2"}>
                <FontAwesomeIcon icon={icon({name: "wand-magic-sparkles"})} className={"ms-1"}/> Animated
            </div>
    } else {
        animationTag = null
    }

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
        <div
            className={"modelImage"}
            onMouseMove={event => { handleMouseMove(event) }}
            onMouseLeave={handleMouseLeave}
            style={{
                backgroundImage: 'url(' + imageUrl + ')',
                backgroundPosition: backgroundPosition,
            }}
        >
            {animationTag}
        </div>
    );
}