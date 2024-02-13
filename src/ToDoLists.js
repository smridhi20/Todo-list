import React from "react";

const ToDoLists = (props) => {
  return (
    <>
      <div className="todo_style">
        <li>
          <p
            id="cross"
            onClick={() => {
            props.onSelect(props.id);
            }}
          >
            &#10006;
          </p>
          {" "}
          {props.text}
        </li>
        
      </div>
    </>
  );
};

export default ToDoLists;
