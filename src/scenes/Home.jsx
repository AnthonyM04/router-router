import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate()

    return(
        <div className="home-box">
            <h1>Home</h1>
            <img src='https://picsum.photos/300/300?random=1' alt='random photo'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ligula ac urna eleifend laoreet ut at nibh. Cras ornare libero at ex fermentum dignissim. Vivamus nunc massa, dictum ut metus sed, lobortis sollicitudin lacus. Integer in libero nec tortor tincidunt fringilla vitae et magna. Phasellus ultrices ante felis, eu dictum leo ullamcorper sed. Aliquam ut neque neque. Mauris euismod purus vel luctus faucibus. Quisque dictum sed massa sed tincidunt. Cras sem quam, maximus quis dictum vel, suscipit vel dolor. Maecenas a nisi justo.</p>
            <button onClick={ () => navigate('/about')}>About</button>
        </div>
    )
}