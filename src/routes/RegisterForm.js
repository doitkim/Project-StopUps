import { useNavigate } from "react-router-dom";
import "../CSS/RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const Year = date.getFullYear();
    const Month = String(date.getMonth() + 1).padStart(2, "0");
    let day = date.getDay();
    const dates = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0"); // 문자열로 변환 후 앞에 0 넣어줌

    switch (
      String(day) // 요일 확인해서 출력
    ) {
      case "0":
        day = "일";
        break;
      case "1":
        day = "월";
        break;
      case "2":
        day = "화";
        break;
      case "3":
        day = "수";
        break;
      case "4":
        day = "목";
        break;
      case "5":
        day = "금";
        break;
      case "6":
        day = "토";
        break;
      default:
        day = "Loading...";
    }
    const joinDate = `${Year}년 ${Month}월 ${dates}일 (${day}) ${hour}:${minute}:${second}`;
    // 테스트를 위해 로컬 스토리지 사용했으며 이후 DB 연동 후 계정 정보 넣을 공간임
    localStorage.setItem("email", e.target[0].value);
    localStorage.setItem("password", e.target[1].value);
    localStorage.setItem("name", e.target[2].value);
    localStorage.setItem("birth", e.target[3].value);
    localStorage.setItem("tel", e.target[4].value);
    localStorage.setItem("joinDate", joinDate);
    navigate("/");
  };
  return (
    <div id="RegisterWrap">
      <form onSubmit={onSubmit} id="RegisterForm">
        <input type="email" placeholder="e-mail" required />
        <input
          type="password"
          placeholder="영문,대소문자,숫자,특수문자 포함 8~16자"
          required
          pattern="^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$"
        />
        <input type="text" placeholder="이름" required />
        <input type="date" placeholder="생년월일" required />
        <input
          type="tel"
          required
          pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
          maxLength="13"
          placeholder="예) 010-1234-5678"
        />
        <button>회원 가입</button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          취소
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
