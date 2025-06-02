export default function Header() {
  return (
    <header className="flex justify-between items-center px-[20px] py-[10px] bg-black text-white">
      <h2>OZ코딩스쿨</h2>
      <ul className="flex justify-center items-center gap-5 ">
        <li className="list-none font-normal text-[13px]" >로그인</li>
        <li className="list-none font-normal text-[13px]">회원가입</li>
        <li className="list-none font-normal text-[13px]">내클래스</li>
      </ul>
    </header>
  );
}
