import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./routes/Card";
import Drink from "./routes/Drink";
import Food from "./routes/Food";
import Footer from "./routes/Footer";
import Home from "./routes/Home";
import LoginForm from "./routes/LoginForm";
import MenuForm from "./routes/MenuForm";
import MenuStory from "./routes/MenuStory";
import Product from "./routes/Product";
import RegisterForm from "./routes/RegisterForm";

const AppRouter = ({ userObj, isLoggedIn }) => {
  return (
    <Router>
      <MenuForm userObj={userObj} />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route exact path="/drink" element={<Drink userObj={userObj} />} />
            <Route exact path="/food" element={<Food userObj={userObj} />} />
            <Route
              exact
              path="/product"
              element={<Product userObj={userObj} />}
            />
            <Route exact path="/card" element={<Card userObj={userObj} />} />
            <Route
              exact
              path="/menustory"
              element={<MenuStory userObj={userObj} />}
            />
            <Route exact path="*" element={<Home userObj={userObj} />} />
          </>
        ) : (
          // 로그인 인증이 미완료시 인증 시 해당경로에 있으면 인증 컴포넌트로 보내버림
          <>
            <Route exact path="/register" element={<RegisterForm />} />
            <Route exact path="*" element={<LoginForm />} />
          </>
        )}
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
