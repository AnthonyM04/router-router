import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate()

    return(
        <>
        <h2>About</h2>
        <img src='https://picsum.photos/300/300' alt='random photo'/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam, lorem quis aliquet lobortis, velit arcu blandit justo, non viverra est quam et velit. Donec dignissim semper dui sit amet viverra. Aenean tempor ligula tellus, vitae convallis sem auctor sit amet. Phasellus nec vestibulum erat, id lacinia arcu. Nam ultricies hendrerit nunc vel venenatis. Donec quis posuere magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis id malesuada elit. Ut sollicitudin dui at enim accumsan, in mollis metus pellentesque. Aenean ullamcorper nibh sed bibendum porta. </p>
        <button onClick={ () => navigate('/')}>Home</button>
        </>
    )
}