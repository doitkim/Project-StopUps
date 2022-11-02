/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import Modal from "react-modal";
import "../CSS/userInfo.css";
import "../CSS/MenuForm.css";
import Logo from "../Image/logo.png";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";

const MenuForm = ({ userObj }) => {
  const [popUp, setPopUp] = useState(false);
  const [passCheck, setPassCheck] = useState(false);
  let [passCount, setPassCount] = useState(120);
  let [sessionCount, setSessionCount] = useState(1800);
  const LogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  const userInfo = () => {
    setPopUp(!popUp);
  };

  const userInfoCheck = (e) => {
    e.preventDefault();
    if (userObj.password === e.target[0].value) {
      setPassCheck(!passCheck);
      e.target[0].value = "";
      setInterval(() => {
        if (passCount === 0) {
          setPassCount(120);
          return;
        }
        setPassCount(--passCount);
      }, 1000);
    } else {
      setPassCheck(false);
    }
    setTimeout(() => {
      setPassCheck(false);
    }, 120000);
  };

  if (userObj.name !== null) {
    setInterval(() => {
      if (sessionCount === 0) {
        localStorage.clear();
        sessionCount(1800);
        return;
      }
      setSessionCount(--sessionCount);
    }, 1000);
  }

  const exitModal = () => {
    setPopUp(false);
  };
  return (
    <div className="MenubarForm">
      <Link to="/">
        <img src={Logo} width="100" />
      </Link>

      <Link to="/drink">
        <div>Drink</div>
      </Link>

      <Link to="/food">
        <div>Food</div>
      </Link>
      <Link to="/product">
        <div>Product</div>
      </Link>
      <Link to="/card">
        <div>Card</div>
      </Link>
      <Link to="/MenuStory">
        <div>Menu Story</div>
      </Link>
      <div>
        {userObj.name !== null ? (
          <>
            <span>
              {userObj.name}님 ({Math.floor(sessionCount / 60)}:
              {Math.floor(sessionCount % 60)})
            </span>
            <span onClick={userInfo}>
              <FaUserCircle />
            </span>
            <span onClick={LogOut}>
              <GiExitDoor />
            </span>
          </>
        ) : null}
      </div>
      <Modal
        isOpen={popUp}
        onRequestClose={() => setPopUp(false)}
        id="userInfoModal"
      >
        <form onSubmit={userInfoCheck}>
          <h3>비밀번호 인증 [{passCount}s]</h3>
          <input
            placeholder="비밀번호를 입력하세요"
            type="password"
            required
            pattern="^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$"
          />
          <button>전송</button>
        </form>
        {passCheck ? (
          <>
            <h3>회원 정보</h3>
            <span>이메일 : {userObj.email}</span>
            <span>이름 : {userObj.name}</span>
            <span>생년월일 : {userObj.birth}</span>
            <span>연락처 : {userObj.tel}</span>
            <span>가입일자 : {userObj.joinDate}</span>
          </>
        ) : null}
        <span onClick={exitModal}>❌</span>
      </Modal>
    </div>
  );
};

export default MenuForm;
