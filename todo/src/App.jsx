import { useState } from "react";
import "./App.css";
import drop_icon from "./assets/drop.svg";
import todo_icon from "./assets/todo.svg";
import done_icon from "./assets/done.svg";

function App() {
    var savedItems = JSON.parse(localStorage.getItem("itemsList"));
    if (savedItems === null) {
        savedItems = [
            { txt: "code a todo list", done: false },
            { txt: "make it good looking", done: false },
            { txt: "code a quiz", done: true },
            { txt: "invent questions", done: true },
        ];
        savedItems = [
            { txt: "example of an item to do", done: false },
            { txt: "example of a done item", done: true },
        ];
    }
    const [itemsList, setItemsListState] = useState(savedItems);
    function setItemsList(newItemsList) {
        setItemsListState(newItemsList);
        localStorage.setItem("itemsList", JSON.stringify([...newItemsList]));
    }
    function removeItem(txt) {
        const newItemsList = itemsList.filter((item) => item.txt !== txt);
        setItemsList(newItemsList);
    }
    function toggleDone(txt) {
        const newItemsList = itemsList.map((item) => {
            if (item.txt === txt) {
                item.done = !item.done;
            }
            return item;
        });
        setItemsList(newItemsList);
    }
    function addTodo(txt) {
        const newItemsList = [{ txt: txt, done: false }, ...itemsList];
        setItemsList(newItemsList);
    }
    function addDone(txt) {
        const newItemsList = [...itemsList, { txt: txt, done: true }];
        setItemsList(newItemsList);
    }

    return (
        <div>
            <p style={{ color: "#a00", paddingTop: "4em" }}>Todo</p>
            <ul className="todo">
                <AddItem addItem={addTodo} ticked={false} />
                {itemsList
                    .filter((item) => !item.done)
                    .map((item, index) => {
                        return (
                            <Item
                                key={(index + item.txt).toString(16)}
                                txt={item.txt}
                                toggleDone={toggleDone}
                                removeItem={removeItem}
                                ticked={item.done}
                            />
                        );
                    })}
            </ul>
            <p style={{ color: "green" }}>Done</p>
            <ul className="done">
                {itemsList
                    .filter((item) => item.done)
                    .map((item, index) => {
                        return (
                            <Item
                                key={(index + item.txt).toString(16)}
                                txt={item.txt}
                                toggleDone={toggleDone}
                                removeItem={removeItem}
                                ticked={item.done}
                            />
                        );
                    })}
                <AddItem addItem={addDone} ticked={true} />
            </ul>
        </div>
    );
}

function Item(props) {
    const txt = props.txt;
    const ticked = props.ticked;
    const toggleDone = props.toggleDone;
    const removeItem = props.removeItem;
    return (
        <li key={txt}>
            {ticked && (
                <img
                    src={done_icon}
                    alt="todo tick symbol"
                    className="tick"
                    onClick={() => {
                        toggleDone(txt);
                    }}
                />
            )}
            {!ticked && (
                <img
                    src={todo_icon}
                    alt="todo tick symbol"
                    className="tick"
                    onClick={() => {
                        toggleDone(txt);
                    }}
                />
            )}
            <span>{txt}</span>
            <img
                src={drop_icon}
                alt="drop item symbol"
                className="cross"
                onClick={() => {
                    removeItem(txt);
                }}
            />
        </li>
    );
}

function AddItem(props) {
    const addItem = props.addItem;
    const ticked = props.ticked;
    const [txt, setTxt] = useState("");
    return (
        <li>
            {ticked && (
                <img src={done_icon} alt="todo tick symbol" className="tick" />
            )}
            {!ticked && (
                <img src={todo_icon} alt="todo tick symbol" className="tick" />
            )}
            <form className="add-item">
                <input
                    type="text"
                    placeholder="Add a new item..."
                    value={txt}
                    onChange={(e) => setTxt(e.target.value)}
                />
                <input
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        addItem(txt);
                        setTxt("");
                    }}
                />
            </form>
        </li>
    );
}
export default App;
