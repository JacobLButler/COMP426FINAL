import React from 'react';
import {createAccount} from "../../api/account/Account";
import {createTodo} from "../../api/todo/Todo";

import PropTypes from 'prop-types';
import FoodSearch from '../edamam/FoodSearch';

AddTodo.propTypes = {
  onChange: PropTypes.func
};


function AddTodo(props) {
  return (
    <div className="box has-background-white-centered" style={{width: '500px'}}>
      <h3 className="has-text-dark">Enter Title for Recipe</h3>
      <form onSubmit={async (e) => {
        e.preventDefault();
        const description = e.target.description.value;
        const title = e.target.title.value;
        e.target.title.value = '';
        e.target.description.value = '';
        let todos = (await createTodo({title, description}));
        if (props.onChange) props.onChange(todos);
      }}>
        <div className="field">
        <input className="input" placeholder="Title" type="text" name="title"/>
        <p>Enter Ingredients for Recipes</p>
          <input className="input" placeholder="Ingredient 1" type="text" name="description"/>
          <input className="input" placeholder="Ingredient 2" type="text" name="description"/>
          <input className="input" placeholder="Ingredient 3" type="text" name="description"/>
          <div>
          <p>Enter Directions for Recipe</p>
          <input className="input" placeholder="Direction 1" type="text" name="description"/>
          <input className="input" placeholder="Direction 2" type="text" name="description"/>
          <input className="input" placeholder="Direction 3" type="text" name="description"/>
          </div>
        </div>
        <input className="button is-info" type="submit" value={"Add more Ingredients"}/>
        <input className="button is-link" type="submit" value={"Add more Directions"}/>
        <input className="button is-success" type="submit" value={"Save"}/>
        <input className="button is-danger" onClick={() => {
                window.location.reload();
              }} value={"Cancel"}/>
      </form>
      <FoodSearch/>
    </div>
  );
}

export default AddTodo;
