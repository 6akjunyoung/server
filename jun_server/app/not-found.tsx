export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
      <h1 className="text-5xl font-bold text-red-500">404 😢</h1>
      <p className="mt-4 text-lg">페이지를 찾을 수 없습니다.</p>
      <a
        href="/"
        className="mt-6 text-blue-500 hover:underline text-xl"
      >
        홈으로 돌아가기
      </a>
      <a
        href="/aboutMe"
        className="mt-6 text-blue-500 hover:underline text-xl"
      >
        AboutMe로 돌아가기
      </a>
    </div>
  );
}
