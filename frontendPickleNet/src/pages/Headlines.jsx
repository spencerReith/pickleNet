import { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/Headlines.css'

const url = "http://127.0.0.1:5000";

function Headlines() {
  const [content, setContent] = useState(null);

  const getContent = async () => {
    const response = await axios.get(`${url}/getContent`);
    const data = response.data;
    console.log(data.length);
    console.log(data[0][3])
    setContent(data);
  }

  useEffect(() => {
    getContent();
  }, [])

  const Article = ({ index }) => {
    return (
    <>
    <img className='img0' src={`http://localhost:5000/static/images/${content[index][3]}`} />
      <div>
        <span className='author'>{content[index][1]},</span>&nbsp;<span className='date'>{content[index][4]}</span>
        <br />
        <span>{content[index][2]}</span>
      </div>
    </>
    );
  }


  return (
    <>
    {(!content || content?.length < 3) && <p className="nothing-yet">Nothing yet. Write some stories or check back in later!</p>}
    {content?.length >= 3 &&
      <div className='container'>
        <div className='banner'>
          <div className='header'>Headlines</div>
          <div className='subtext'>Breaking news, served fresh.</div>
        </div>
        <div className='row0'>
          <div className='leftBox'>
            <Article index={0} />
          </div>
          <div className='rightPanel'>
            <div className='rightBox'>
              <Article index={1} />
            </div>
            <div className='rightBox'>
              <Article index={2} />
            </div>
          </div>
        </div>
        {content?.length >= 7 &&
        <div className='bottom'>
          <div className='b-row'>
            <div className='b-box'>
              <Article index={3} />
            </div>
            <div className='b-box'>
              <Article index={4} />
            </div>
          </div>
          <div className='b-row'>
            <div className='b-box'>
              <Article index={5} />
            </div>
            <div className='b-box'>
              <Article index={6} />
            </div>
          </div>
        </div>
        }
        <div className='bottom-gap'></div>
      </div>
    }
    </>
  )
}

export default Headlines
