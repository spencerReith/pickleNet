import { useNavigate } from 'react-router-dom'
import '../styles/Write.css'

function Write() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Write an article on this page.</h1>
            <br /><br />
            <button onClick={() => navigate('/')}>Headlines Page</button>
        </>
    )
}

export default Write