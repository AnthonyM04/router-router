import { useNavigate } from "react-router-dom";

export default function About() {
    let navigate = useNavigate()

    return(
        <>
        <h2>About</h2>
        <button onClick={ () => navigate('/')}>Home</button>
        </>
    )
}