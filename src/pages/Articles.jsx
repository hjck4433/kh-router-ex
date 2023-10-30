import { Link, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <>
      <Outlet />
      <ul>
        <li>
          <Link to="/articles/1">아티클1</Link>
        </li>
        <li>
          <Link to="/articles/2">아티클2</Link>
        </li>
        <li>
          <Link to="/articles/3">아티클3</Link>
        </li>
      </ul>
    </>
  );
};
export default Articles;
