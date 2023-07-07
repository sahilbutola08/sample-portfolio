// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import './Navbar.css'
import { useState } from 'react'

export default function Navbar() {

    const [isMenuClosed, setMenu] = useState('true');

    return (
        <>
            <div className="container-full d-flex px-4 align-items-center navbar">
                <div className='profile-info d-flex align-items-center'>
                    <div className="profile-image">
                    </div>
                    <h1>RAM MAHESHWARI</h1>
                </div>
                <div className="menu" onClick={() => {setMenu(!isMenuClosed)}}>
                    <i className={`fa-solid fa-${isMenuClosed?'bars':'xmark'}`} style={{fontSize: '22px',transition: '0.5s'}}></i>
                </div>
                <div className='menu-links'>
                    <ul className='links d-flex align-items-center'>
                        <li className='link px-2'><a href='/'>Home</a></li>
                        <li className='link px-2'><a href='/'>About</a></li>
                        <li className='link px-2'><a href='/'>Projects</a></li>
                        <li className='link px-2'><a href='/'>Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className='dropdown' style={{opacity: isMenuClosed?0:1}}>
                <ul className='dropdown-links'>
                    <li className='dropdown-link px-4'><a href='/'>Home</a></li>
                    <li className='dropdown-link px-4'><a href='/'>About</a></li>
                    <li className='dropdown-link px-4'><a href='/'>Projects</a></li>
                    <li className='dropdown-link px-4'><a href='/'>Contact</a></li>
                </ul>
            </div>
        </>
    )
}