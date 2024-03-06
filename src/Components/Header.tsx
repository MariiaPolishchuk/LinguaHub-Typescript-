import React, { useEffect, useState } from "react";
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
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);
  const [isContentOpen, setIsContentOpen] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

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

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const handleContentClick = () => {
    setIsContentOpen(!isContentOpen);
  };

  const closeMenu = () => {
    setIsBurgerOpen(false);
    setIsContentOpen(false);
  };

  const handleContentLiClick = () => {
    setIsContentOpen(!isContentOpen);
  };

  return (
    <header className={`header ${!visible ? "out" : ""}`} role="banner">
      <div className="header-container">
        <Link to="/home" className="logo">
          <img
            className="logo-icon"
            src="src/assets/images/icons/LINGUA.png"
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
                        onClick={handleContentLiClick}
                      >
                        <Link to="/course/beginner" onClick={closeMenu}>
                          Beginner
                        </Link>
                      </li>
                      <li
                        className="choose-levels-li"
                        onClick={handleContentLiClick}
                      >
                        <Link to="/course/intermediate" onClick={closeMenu}>
                          Intermediate
                        </Link>
                      </li>
                      <li
                        className="choose-levels-li"
                        onClick={handleContentLiClick}
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



