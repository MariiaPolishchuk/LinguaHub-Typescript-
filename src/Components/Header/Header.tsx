import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import LoginButton from "../../features/auth/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
  role: string; 
}

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const { isAuthenticated, user: auth0User, logout } = useAuth0();
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const [isContentOpen, setIsContentOpen] = useState<boolean>(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const userMenuRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = document.documentElement.scrollTop;
      const isVisible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleContentClick = () => {
    setIsContentOpen(!isContentOpen);
  };

  const handleUserMenuClick = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const closeMenu = () => {
    setIsBurgerOpen(false);
    setIsContentOpen(false);
    setIsUserMenuOpen(false);
  };

  const isAdmin = isAuthenticated && auth0User?.email === "mpolishchuk9106@gmail.com";

  return (
    <header className={`header ${!visible ?  "out" : ""}`}  role="banner">
      <div className="header-container">
        <Link to="/home" className="logo">
          <img
            className="logo-icon"
            src="src/assets/images/IMG_9127.png"
            alt="Logo"
          />
        </Link>

        <span
          className={`hamburger ${isBurgerOpen ? "open" : "close"}`}
          onClick={handleBurgerClick}
        >
          <FontAwesomeIcon icon={faBars} />
        </span>

        <nav id="nav" className={`toggle ${isBurgerOpen ? "open" : "close"}`}>
          <ul id="nav-ul">
            <li>
              <div
                className={`content-li ${isContentOpen ? "active" : ""}`}
                onClick={handleContentClick}
              >
                <a href="#">Content</a>

                {isContentOpen && (
                  <div className="content fade-in-fast">
                    <ul className="header-choose-levels fade-in-fast fast-text">
                      <li
                        className="choose-levels-li"
                        onClick={handleContentClick}
                      >
                        <Link to="/course/beginner" onClick={closeMenu}>
                          Beginner
                        </Link>
                      </li>
                      <li
                        className="choose-levels-li"
                        onClick={handleContentClick}
                      >
                        <Link to="/course/intermediate" onClick={closeMenu}>
                          Intermediate
                        </Link>
                      </li>
                      <li
                        className="choose-levels-li"
                        onClick={handleContentClick}
                      >
                        <Link to="/course/advanced" onClick={closeMenu}>
                          Advanced
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
            <li>
              <Link to="/about" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/free-lesson" onClick={closeMenu}>
                Trial
              </Link>
            </li>

            {isAdmin && (
              <li>
                <Link to="/admin-panel" onClick={closeMenu}>
                  Admin Panel
                </Link>
              </li>
            )}

            <li>
              {isAuthenticated ? (
                <div className="user-menu" ref={userMenuRef}>
                  {auth0User &&
                    auth0User.picture && (
                      <img
                        src={auth0User.picture}
                        alt="User Avatar"
                        className="user-avatar"
                        onClick={handleUserMenuClick}
                      />
                    )}
                  {!auth0User?.picture && (
                    <FontAwesomeIcon
                      icon={faUser}
                      className="user-icon"
                      onClick={handleUserMenuClick}
                    />
                  )}
                  {isUserMenuOpen && (
                    <div className="user-menu-content">
                      <div className="user-info">
                        {auth0User && auth0User.picture && (
                          <img
                            src={auth0User.picture}
                            alt="User Avatar"
                            className="user-avatar"
                            onClick={handleUserMenuClick}
                          />
                        )}
                        <div className="user-info-mail">
                          <span className="name">{auth0User?.name}</span>
                          <span>{auth0User?.email}</span>
                        </div>
                      </div>
                      <div className="logout-icon" onClick={() => { logout(); }}>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                        <span>Log out</span>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <LoginButton />
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
