import { useNavigate } from 'react-router-dom'
import '../styles/Headlines.css'

function Headlines() {
  const navigate = useNavigate();



  return (
    <>
      <h1>PickleNet</h1>
      <p>The internet for pickleball. Democratizing news. Changing Lives.</p>
      <button onClick={() => navigate('/write')}>Write a post</button>
      <br /><br /><br />
      <p>Endorsed by Matt Marks and Camilla Taylor.</p>
    </>
  )
}

export default Headlines
