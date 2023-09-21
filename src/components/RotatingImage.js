export default function RotatingImage() {
    function handleMouseMove(event) {
        console.log(event.clientX);
    }

    function rotateImage() {
        console.log('entro');


        window.addEventListener('mousemove', handleMouseMove);
    }

    function resetImage() {
        console.log('surto');

        window.removeEventListener('mousemove', handleMouseMove);
    }

    return (
        <div className={"modelImageContainer"} onMouseEnter={rotateImage} onMouseLeave={resetImage}>
            <div className={"modelImage"}></div>
        </div>
    );
}