export default function NotFound() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>페이지를 찾을 수 없습니다 😢</h1>
        <p>존재하지 않는 페이지에 접근하셨습니다.</p>
        <a href="/" style={{ color: "blue", textDecoration: "underline" }}>
          홈으로 돌아가기
        </a>
      </div>
    );
  }
  