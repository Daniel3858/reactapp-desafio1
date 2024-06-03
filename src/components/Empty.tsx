import style from "./Empty.module.css";
import clipboard from "../assets/clipboard.svg";

export function Empty() {
  return (
    <div className={style.component}>
      <div className={style.tasks}>
        <img src={clipboard} alt="" />
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
