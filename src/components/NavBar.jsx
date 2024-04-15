import { NavLink } from 'react-router-dom';
import Logo from '../assets/radishFullLogo.svg';
import { useAuth } from '../contexts/AuthContext';
import '../css/navbar.scss';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { Button } from '@radix-ui/themes';
import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import {
  HeartIcon,
  HeartFilledIcon,
  BookmarkIcon,
  BookmarkFilledIcon,
  MagnifyingGlassIcon,
  MagicWandIcon,
  DrawingPinFilledIcon,
} from '@radix-ui/react-icons';
import SearchBar from './SearchBar';

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const logoutClick = () => {
    logout();
  };
  if (isLoggedIn) {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <NavLink to="/">
              {' '}
              <img
                src={Logo}
                style={{
                  width: 175,
                  marginBottom: 10,
                }}
                alt="website logo"
              />
            </NavLink>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/suggested-recipe">
                  <AccessibleIcon.Root>
                    <MagicWandIcon />
                  </AccessibleIcon.Root>
                  {'   '}Recipe Generator
                </NavLink>
              </li>
              <li>
                <NavLink to="/recipe-book">
                  <AccessibleIcon.Root>
                    <BookmarkFilledIcon />
                  </AccessibleIcon.Root>
                  {'   '}Recipe Book
                </NavLink>
              </li>
              <li className="favorites">
                <NavLink to="/favorites" end>
                  <AccessibleIcon.Root>
                    <HeartFilledIcon />
                  </AccessibleIcon.Root>
                  {'   '}Favorite Recipes
                </NavLink>
              </li>
              <li className="wantToTry">
                <NavLink to="/recipe-book/want" end>
                  {'   '}
                  <AccessibleIcon.Root>
                    <DrawingPinFilledIcon />
                  </AccessibleIcon.Root>
                  {'     '}Want to Try
                </NavLink>
              </li>

              <li>
                <Button
                  className="logoutBtn"
                  radius="full"
                  variant="soft"
                  onClick={logoutClick}
                >
                  Logout
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  if (!isLoggedIn) {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <NavLink to="/">
              {' '}
              <img
                src={Logo}
                style={{
                  width: 175,
                  marginBottom: 10,
                }}
                alt="website logo"
              />
            </NavLink>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink className="link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <Button radius="full" variant="outline">
                  <NavLink className="loginLink" to="/login">
                    Login
                  </NavLink>
                </Button>
              </li>
              <li>
                <Button radius="full" variant="solid" color="tomato">
                  <NavLink className="signUpLink" to="/signup">
                    Sign Up
                  </NavLink>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};
export default NavBar;
