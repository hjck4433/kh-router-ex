// useParmas react-router-dom에 있는 Hook
import { useParams } from "react-router-dom";

// 서버로부터 가지고 온 데이터 가정
const data = {
  frontend: {
    name: "곰돌이사육사",
    description: "리액트를 좋아하는 개발자",
  },
  backend: {
    name: "달빛사냥꾼",
    description: "스프링부트를 좋아하는 개발자",
  },
  database: {
    name: "천재DBA",
    description: "Database를 좋아하는 개발자",
  },
};

const Profile = () => {
  // 리액트 라우터에서 URL 파라미터 값을 가져오기 위한 Hook
  const params = useParams();
  // 호출하는 페이지에서 지정한 유동적인 값으로 대체되어 컴포넌트에 전달
  const profile = data[params.username];

  return (
    <>
      <h1>사용자 프로필</h1>
      {profile ? (
        // profile이 있으면
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        // profile이 없으면
        <p>존재하지 않는 프로필 입니다.</p>
      )}
    </>
  );
};
export default Profile;
