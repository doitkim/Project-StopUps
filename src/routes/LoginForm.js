import { Link } from "react-router-dom";

const LoginForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const userEmail = localStorage.getItem("email");
    const userPassword = localStorage.getItem("password");
    if (e.target[0].value === userEmail && e.target[1].value === userPassword) {
      window.location.reload();
    }
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="email" placeholder="e-mail" required />
        <input
          type="password"
          placeholder="영문,대소문자,숫자,특수문자 포함 8~16자"
          required
          pattern="^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$"
        />
        <button>로그인</button>
      </form>
      <Link to="/register">아직 회원이 아니신가요?</Link>
    </>
  );
};

export default LoginForm;
