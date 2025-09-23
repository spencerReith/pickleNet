import { useState } from 'react'

import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        The world's leading community based Pickleball news site.
      </p>
    </>
  )
}

export default App
