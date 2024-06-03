import logo from "../assets/header-logo.svg";
import style from "./Header.module.css";

export function Header() {
  return (
    <div className={style.header}>
      <img src={logo} alt="" />
    </div>
  );
}
