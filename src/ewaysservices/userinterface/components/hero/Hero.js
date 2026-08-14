import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <img src="/logo.png" alt="Logo" />
      </div>

      <div className="right">
        <h1>EWAYS</h1>

        <p>Empowering Businesses</p>
      </div>
    </div>
  );
}