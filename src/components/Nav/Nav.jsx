import './Nav.css';

function Nav({ links }) {
  return (<nav className='nav-container'>
    <ul className='nav-container'>
      {links.map((link) => <li
        className='nav-item'
        key={crypto.randomUUID()}>
        <a href={link.ref}>{link.label}</a>
      </li>
      )}
    </ul>
  </nav>);
}

export default Nav;
