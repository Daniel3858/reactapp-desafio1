import style from "./App.module.css";
import { Header } from "./components/Header";
import plus from "../src/assets/plus.svg";
import "./global.css";
import { Task } from "./components/Task";
import { ChangeEvent } from "react";
import { useState } from "react";
import { Empty } from "./components/Empty";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [contentTask, setContentTask] = useState("");

  function addingTask() {
    setTasks([...tasks, contentTask]);
    setContentTask("");
  }

  function handleContentTask(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setContentTask(event.target.value);
  }

  function handleEnterKey(event: React.KeyboardEvent<HTMLInputElement>) {
    const isEnterKey = event.nativeEvent?.key?.toUpperCase() === "ENTER";

    if (isEnterKey && Boolean(contentTask)) addingTask();
  }

  function deleteTask(content: string) {
    const remove = tasks.filter((task) => {
      return task !== content;
    });
    setTasks(remove);
  }

  const empty = contentTask === "";

  return (
    <div className={style.project}>
      <Header />

      <div className={style.form}>
        <input
          onChange={handleContentTask}
          type="text"
          value={contentTask}
          placeholder="Adicione uma nova tarefa"
          onKeyUp={handleEnterKey}
          required
        />
        <button onClick={addingTask} type="submit" disabled={empty}>
          Criar <img src={plus} alt="" />
        </button>
      </div>

      <div className={style.score}>
        <p>
          Tarefas criadas <span>{tasks.length}</span>
        </p>
        <p>
          Concluidas <span>0</span>
        </p>
      </div>

      {!tasks?.length ? (
        <div className={style.main}>
          <Empty />
        </div>
      ) : (
        tasks.map((task, index) => {
          return <Task key={index} taskValue={task} remove={deleteTask} />;
        })
      )}
    </div>
  );
}
