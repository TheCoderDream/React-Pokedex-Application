import React from 'react';
import PropTypes from 'prop-types';


const NavLink = ({title, to}) => {
    return (
        <li className="nav-item">
            <a className="nav-link" href={to}>{title}</a>
        </li>
    );
};

const Navbar = (
    {
        brand,
        links
    }
) => {

    const navLinks = links ? links.map((title, to) => <NavLink title={title} to={to}/>): null;

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
            <div className="container">
                <a className="navbar-brand" href={'/'}>{brand}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href={'/'}>Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={'/add-pokemon'}>Add Pokemon <span className="sr-only"></span></a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

Navbar.defaultProps = {
    brand: 'My Pokedex App'
};

Navbar.propTypes = {
    brand: PropTypes.string.isRequired
};


export default Navbar;