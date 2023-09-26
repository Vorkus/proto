import '../styles/Logo.css';
import {basePath} from "../App";

export default function Logo() {
    return (
        <img className="logo" src={`${basePath}/rocket-logo.png`}  alt="planet"/>
    );
}