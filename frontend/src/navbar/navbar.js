import './navbar.css';

function Navbar() {
  return (
    <div classname="navbar-container">
      <div className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/events">Events</a></li>
          <li><a href="/join">Join the Club</a></li>
          <li><a href="/photos">Photos</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;