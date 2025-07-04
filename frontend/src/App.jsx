import './App.css'
import Day2 from './components/Day2'
import Day3 from './components/Day3'
import Day4 from './components/Day4'
import Day6 from './components/Day6'
import Day7 from './components/Day7'
import Day8 from './components/Day8'
import Day9 from './components/Day9'

import { useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState('2')

  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to My CMS</h1>
      </header>
      <div className="main">
        <nav className="sidebar">
          <ul>
            <li onClick={() => setCurrentPage('2')}>Buổi 2</li>
            <li onClick={() => setCurrentPage('3')}>Buổi 3</li>
            <li onClick={() => setCurrentPage('4')}>Buổi 4</li>
            <li onClick={() => setCurrentPage('5')}>Buổi 5</li>
            <li onClick={() => setCurrentPage('6')}>Buổi 6</li>
            <li onClick={() => setCurrentPage('7')}>Buổi 7</li>
            <li onClick={() => setCurrentPage('8')}>Buổi 8</li>
            <li onClick={() => setCurrentPage('9')}>Buổi 9</li>
            <li onClick={() => setCurrentPage('10')}>Buổi 10</li>
          </ul>
        </nav>

        <main className="content">
          {currentPage == '2' ? <Day2 /> : null}
          {currentPage == '3' ? <Day3 /> : null}
          {currentPage == '4' ? <Day4 /> : null}
          {currentPage == '5' ? <div>Nội dung Buổi 5</div> : null}
          {currentPage == '6' ? <Day6 /> : null}
          {currentPage == '7' ? <Day7 /> : null}
          {currentPage == '8' ? <Day8 /> : null}
          {currentPage == '9' ? <Day9 /> : null}
          {currentPage == '10' ? <div>Nội dung Buổi 10</div> : null}
        </main>
      </div>
    </div>
  )
}

export default App
