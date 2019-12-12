import React, {useEffect, useState} from 'react';
import {getTodos, updateTodos} from "../../api/todo/Todo";
import AddTodo from "./AddTodo";
import {Transition} from "react-spring/renderprops-universal";
import {config} from 'react-spring'

function ShowTodos(props) {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    (async () => {
        setTodos(await getTodos());
      }
    )();
  }, []);

  if (!todos) return <div>Todos are loading</div>;

  return (
    <>
      <div className="field todo-container ">
        <Transition
          items={todos} keys={todo => {
          return todo.date
        }}
          from={{transform: 'translate3d(0,-40px,0)'}}
          enter={{transform: 'translate3d(0,0px,0)', opacity: 1}}
          leave={{}}
          config={{...config.default, tension: 500}}
        >

          {(todo, state, index) => props => (
            <div style={props} className="notification is-white todo-item">
              <button className="delete" onClick={async () => {
                let [...tmp] = todos;
                tmp.splice(index, 1);
                setTodos(await updateTodos(tmp));
              }}/>

              <div className="is-size-5 is-bold">
                Your Grocery List
              </div>
              <div>{todo.title}</div>
              <div>
                {todo.description}
              </div>
            </div>
          )
          }
        </Transition>
      </div>
      <AddTodo onChange={todos => {
        setTodos(todos);
      }}/>
    </>
  );
}

export default ShowTodos;
