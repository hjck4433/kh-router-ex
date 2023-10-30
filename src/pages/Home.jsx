import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  // Link to 를 사용하지 않고 다른 페이지로 이동해야 상황에서 사용하는 Hook
  const navigate = useNavigate();
  return (
    <>
      <h1>여기가 홈 입니다.</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      <Link to="/about">소개페이지로 이동</Link>
      <br />
      <button onClick={() => navigate("/mypage")}>마이페이지 이동</button>
      <br />
      <Link to="/mypage">마이페이지로 이동</Link>
      <br />
      <Link to="/setting">설정페이지로 이동</Link>
      <br />
      <ul>
        <li>
          <Link to="/profiles/frontend">Frontend 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/backend">Backend 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/database">Database프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시판 목록</Link>
        </li>
      </ul>
    </>
  );
};
export default Home;
