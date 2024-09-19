import { Link } from "react-router-dom";
import FakestoreHome from "./fakestorehome";

export default function Home(){


    return (
        <div>
        
        <Link to="/">{<FakestoreHome/>}</Link>  </div>
    )
}