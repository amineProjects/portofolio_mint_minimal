import headerImg from "@/assets/images/header.jpg";
import "@/components/header/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>hello!!! we are creative digital agency</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          voluptate reprehenderit, excepturi perspiciatis nulla dicta
        </p>
        <button className="button primary">send message</button>
      </div>
      <div className="header-image">
        <img src={headerImg} alt="header image" />
      </div>
    </header>
  );
};

export default Header;
