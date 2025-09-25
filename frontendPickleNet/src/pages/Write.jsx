import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/Write.css'

const url = "http://127.0.0.1:5000";

function Write() {
    const navigate = useNavigate();

    const [ author, setAuthor ] = useState('');

    const [articleText, setArticleText] = useState('');

    const postArticle = async () => {

            if (!author || !articleText){
                alert("Both author and article text are required!");
                return;
            }

            const formData = new FormData();
            formData.append(
                "Author",
                author
            );
            formData.append(
                "Article Text",
                articleText
            );

            setAuthor("");
            setArticleText("");
            const response = await axios.post(`${url}/write`, formData);
            console.log(response.data);
        }

    return (
        <>
            <h1>Write an article on this page.</h1>
            <br /><br />
            <button onClick={() => navigate('/')}>Headlines Page</button>
            <br /><br />
            <label>Author:</label>&nbsp;&nbsp;
            <input value={author} onChange={(event) => setAuthor(event.target.value)}/>
            <label>Text:</label>&nbsp;&nbsp;
            <input value={articleText} onChange={(event) => setArticleText(event.target.value)}/>
            <br /><br />
            <button onClick={() => postArticle()}>Post Article</button>
        </>
    )
}

export default Write