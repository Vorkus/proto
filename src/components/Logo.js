import '../styles/Logo.css';

export default function Logo({animatedLogo}) {
    return (
        <img className={"logo" + (animatedLogo ? " animated" : "")} src={"/proto/rocket-logo.png"}  alt="planet"/>
    );
}