import { Trash } from "phosphor-react";
import style from "./Task.module.css";

interface contentTask {
  taskValue: string;
  key: number;
  remove: (content: string) => void;
}

export function Task({ taskValue, remove }: contentTask) {
  function handleDeleteTask() {
    remove(taskValue);
  }

  return (
    <div className={style.task}>
      <div className={style.container}>
        <input id="task" type="checkbox" />
        <label htmlFor="task">{taskValue}</label>
      </div>
      <button title="Deletar tarefa" onClick={handleDeleteTask}>
        <Trash size={16} />
      </button>
    </div>
  );
}
