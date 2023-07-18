import React, {useContext} from 'react'
import { AppContext } from "../../App"


function Header() {
    const {setPage} = useContext(AppContext)

    const handleClick = (event) => {
        const pageValue = event.target.innerHTML
        setPage(`${pageValue}`)
    }

  return (
    <header>
    <h1>Jesse Elkins</h1>
    <nav>
        <ul>
            <li onClick={handleClick}>About</li>
            <li onClick={handleClick}>Portfolio</li>
            <li onClick={handleClick}>Resume</li>
            <li onClick={handleClick}>Contact</li>
        </ul>
    </nav>
    </header>
  )
}

export default Header