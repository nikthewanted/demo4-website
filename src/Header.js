import "./header.css"

export default function Header () {
    return(
        <div className="navbar">
        <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWoGMkjZvIiOqLQ1UZNJ_Yj6Sm5EIEOYyf8F-b4aB&s" alt="react"/>
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </div>
    );

};