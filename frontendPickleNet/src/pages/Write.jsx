import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/Write.css'

const url = "http://127.0.0.1:5000";

function Write() {
    const navigate = useNavigate();

    const [ author, setAuthor ] = useState('');
    const [ file, setFile ] = useState(null);

    const [articleText, setArticleText] = useState('');

    const postArticle = async () => {
        if (author === "" || file === null || !articleText) {
            window.alert("Ensure all fields are filled in.");
            return;
        }

        const formData = new FormData();
        formData.append(
            "Author",
            author
        );
        formData.append(
            "Image",
            file
        )
        formData.append(
                "Article Text",
                articleText
            );
        setAuthor("");
        setArticleText("");
        setFile(null);
        const response = await axios.post(`${url}/write`, formData);
        console.log(response.data);

    }

    const handleFileChange = async (e) => {
        setFile(e.target.files[0]);
    }

    return (
        <div className='post-page'>
            <div className='header'>Share your pickleball story!</div>
            
            <div className='post-editor'>
                {/*Left side: image upload and preview */}
                <div className='post-image-selection'>
                    <input 
                        type="file" 
                        accept=".img,.jpg,.jpeg,.png" 
                        onChange={handleFileChange}
                    />
                    {file && (
                        <img
                            src={URL.createObjectURL(file)}
                            alt="preview"
                            className="post-image-preview"
                        />
                    )}
                    {!file && (
                        <div>
                            <img
                                src={`http://localhost:5000/static/images/pickleball.png`}
                                alt="preview"
                                className="post-image-preview"
                            />
                            <p className='good-font'>Example breaking news photo</p>
                        </div>
                    )}


                </div>

                {/*Right side: author, caption, and button */}            
                <div className='post-form-selection'>
                    <label className='good-font'>Author:</label>
                    <input 
                        type="text"
                        value={author} 
                        onChange={(event) => setAuthor(event.target.value)}
                        className='post-author-input'
                        placeholder='My name is...'
                    />

                    <label className='good-font'>Caption:</label>
                    <textarea
                        value={articleText}
                        onChange={(event) => setArticleText(event.target.value)}
                        className='article-text'
                        placeholder='Today in Pickleball...'
                    />

                     <button className="post-submit-button" onClick={() => postArticle()}>Post</button>

                </div>
            </div>
            

        </div>
    );
}

export default Write