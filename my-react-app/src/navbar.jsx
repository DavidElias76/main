import './App.css'


function Navbar(){

    return (

        <nav className='navbar'>
            <ul>
                <li className='nav-item'><a href="#">Dashboard</a></li>
                <li className='nav-item'><a href="#">Widgets</a></li>
                <li className='nav-item'><a href="">
                 <button aria-expanded="false">Apps</button>
                    <ul className="sub-menu" aria-label="Apps">
                        <li><a href="#">Calender</a></li>
                        <li><a href="#">Chat</a></li>
                        <li><a href="#">Email</a></li>
                    </ul>
                </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar