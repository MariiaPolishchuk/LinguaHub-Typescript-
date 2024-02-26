import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface User {
  username: string;
}

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
  showModeratorBoard: boolean;
  showAdminBoard: boolean;
}

const Header: React.FC<HeaderProps> = ({
  user,
  onLogout,
  showModeratorBoard,
  showAdminBoard
}) => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.pageYOffset);
  const [visible, setVisible] = useState<boolean>(true);
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const isVisible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setVisible(isVisible);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const closeMenu = () => {
    setIsBurgerOpen(false);
  };

  return (
    <header className={`header ${visible ? "" : "out"}`} role="banner">
      <div className="header-container">
        <Link to="/home" className="logo">
          {" "}
          <img
            className="logo-icon"
            src="src/assets/images/icons/LINGUA-logo.png"
            alt="Logo"
          />
          {" "}
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
              <Link to="/course" onClick={closeMenu}>
                Content
              </Link>
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

            {/* {showModeratorBoard && (
              <li>
                <Link to="/mod" onClick={closeMenu}>
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li>
                <Link to="/admin" onClick={closeMenu}>
                  Admin Board
                </Link>
              </li>
            )} */}

            {user ? (
              <li>
                <Link to="/user" onClick={closeMenu}>
                  User
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login" onClick={closeMenu}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" onClick={closeMenu}>
                    Sign Up
                  </Link>
                </li>
              </>
            )}

            {user && (
              <div className="sign">
                <li>
                  <Link to="/profile" onClick={closeMenu}>
                    {user.username}
                  </Link>
                </li>
                <li>
                  <a href="/" onClick={onLogout}>
                    LogOut
                  </a>
                </li>
              </div>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
