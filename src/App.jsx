import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todolist from "./components/TodoList";
import InputField from "./components/InputField";
import { addNewTodo, fetchTodos } from "./store/todoSlice";

function App() {
    const [text, setText] = useState("");
    const { status, error } = useSelector((state) => state.todos);
    const dipatch = useDispatch();
    const addTask = () => {
        dipatch(addNewTodo(text));
        setText("");
    };
    useEffect(() => {
        dipatch(fetchTodos());
    }, [dipatch]);

    return (
        <div className="App">
            <InputField
                text={text}
                handleInput={setText}
                handleSubmit={addTask}
            />
            {status === "loading" && <h2>Loading...</h2>}
            {error && <h2>An error occured:{error}</h2>}
            <Todolist />
        </div>
    );
}

export default App;
