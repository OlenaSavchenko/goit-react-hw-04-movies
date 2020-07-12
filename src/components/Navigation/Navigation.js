import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './Navigation.css';

const Navigation = () => {
  return (
    <ul className="NavList">
      <li>
        <NavLink
          exact
          to={routes.home}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movies}
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Search Movies
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.movie}
          className="NavLink"
          activeClassName="NavLink--active"
        ></NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
