import { Clock } from '../components/Clock'

import './Board1.css'

export const Board1 = () => {
  return (
    <div>
      <header>
        <h1 className="center">Jukebox</h1>
      </header>
      <body>
        <div>
          <div className="clock">
            <Clock></Clock>
          </div>
          song queue
        </div>
      </body>
    </div>
  )
}
