import { Link, useSearchParams } from "react-router-dom";

const About = () => {
  // const location = useLocation(); => useLocation
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");
  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };
  const onIncreaseMode = () => {
    // console.log(mode);
    const nextMode = isNaN(mode) ? 1 : parseInt(mode) + 1;
    // console.log(nextMode);
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
      {/* <p>쿼리스트링 : {location.search}</p> */}
      <p>detail : {detail} </p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
      <br />
      <Link to="/">Home으로 이동</Link>
    </>
  );
};
export default About;
