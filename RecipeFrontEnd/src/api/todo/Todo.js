import {getAxiosInstance} from "../../config/Axios";

const axios = getAxiosInstance('/user/todo');


export const getTodos = async () => {
  try {
    let result = await axios.get('');
    return result.data.result;
  } catch (e) {
    return [];
  }
};

// kind of a hack
// instead of deleting, update list with what we have locally
export const updateTodos = async (todos) => {
  return (await axios.post('', {
    data: todos
  })).data.result.posted;
};

export const createTodo = async ({title = '', description = '', date = new Date().getTime()} = {}) => {
  return (await axios.post('', {
    data: {
     title, description, date
    },
    type: 'merge'
  })).data.result.posted;
};
