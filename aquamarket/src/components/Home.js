import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"; // 상위 폴더의 App.css를 임포트
import videoSrc from "../videos/fish.mp4";

const Home = ({ isLoggedIn, setIsLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation(); // 이벤트 전파 중지
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
    if (searchOpen) {
      setSearchOpen(false);
    }
    if (loginOpen) {
      setLoginOpen(false);
    }
  };

  const handleMenuClick = (event) => {
    closeMenu();
  };

  const toggleSearch = (event) => {
    event.stopPropagation();
    setSearchOpen(!searchOpen);
  };

  const handleSearchClick = (event) => {
    event.stopPropagation(); // 이벤트 전파 중지
  };

  const toggleLogin = (event) => {
    event.stopPropagation();
    setLoginOpen(!loginOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // 로그아웃 상태로 변경
    closeMenu();
  };

  return (
    <div className="video-container" onClick={closeMenu}>
      <video autoPlay muted loop id="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!menuOpen && (
        <div className="menu-button" id="menu-button" onClick={toggleMenu}>
          ☰
        </div>
      )}
      <div
        className={`search-container ${searchOpen ? "open" : ""}`}
        onClick={handleSearchClick}
      >
        {!searchOpen ? (
          <button onClick={toggleSearch} className="search-icon"></button>
        ) : (
          <>
            <input
              type="text"
              placeholder="Search..."
              onClick={handleSearchClick}
            />
            <button className="search-submit" onClick={handleSearchClick}>
              검색
            </button>
          </>
        )}
      </div>
      <div className={`login-container`}>
        <div onClick={toggleLogin} className="login-icon"></div>
        {loginOpen && (
          <ul className="login-dropdown">
            {isLoggedIn ? (
              <>
                <li onClick={handleLogout}>
                  <span>로그아웃</span>
                </li>
                <li>
                  <Link to="/cart">장바구니</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" onClick={() => setLoginOpen(false)}>
                    로그인하기
                  </Link>
                </li>
                <li>
                  <Link to="/signup">회원가입하기</Link>
                </li>
                <li>
                  <Link to="/cart">장바구니</Link>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`} id="menu">
        <ul>
          {[
            { name: "생물,수초,모스,새우", path: "/aquatic" },
            { name: "어항,수조", path: "/tank" },
            { name: "여과기,여과재", path: "/filter" },
            { name: "에어 관련 용품", path: "/air" },
            { name: "청소,격리,뜰채용품", path: "/cleaning" },
            { name: "해수용품", path: "/saltwater" },
            { name: "활어용품", path: "/livefish" },
          ].map((item) => (
            <li key={item.name}>
              <Link to={item.path} onClick={handleMenuClick}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        <h1>AQUARIUM SHOP</h1>
      </div>
    </div>
  );
};

export default Home;
