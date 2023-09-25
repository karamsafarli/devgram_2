'use client'
import Nav from "./Nav";
import { useSelector } from 'react-redux';
import SessionProviders from "./Provider";


const App = ({ children }) => {

  const darkMode = useSelector((state) => state.colorThemeReducer.value)

  return (
    <html lang="en">
      <body className="app" style={{ backgroundColor: darkMode ? 'black' : '#F3F2EF', color: darkMode ? 'white' : 'black' }}>
        <SessionProviders>
          <div className="app-container">
            <Nav />
            {children}
          </div>
        </SessionProviders>
      </body>
    </html>
  )
}

export default App