export default function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <a href="#home" className="logo">
          TurboDrive
        </a>

        <nav className="desktopNav">
          <a href="#about">Biz haqimizda</a>
          <a href="#results">Natijalar</a>
          <a href="#teachers">O'qituvchilar</a>
          <a href="#reviews">Sharhlar</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a href="#contact" className="primaryBtn smallBtn">
          Ro'yxatdan o'tish
        </a>
      </div>
    </header>
  );
}
