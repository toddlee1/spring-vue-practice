import axios from 'axios'  
  
const SERVER_URL = 'http://15.164.229.52:9000';
// const SERVER_URL = 'http://localhost:9000';
  
const instance = axios.create({  
  baseURL: SERVER_URL,  
  timeout: 1000  
});  
  
export default {
  
  // (C)reate  
  createNew: (user, text, completed) => instance.post('todos', {title: text, user: user, completed: completed}),
  createUser: (id, password, name) => instance.post('users', {id: id, password: password, name: name}),
  // (R)ead  
  getAll: () => instance.get('todos', {  
    transformResponse: [function (data) {  
      return data? JSON.parse(data)._embedded.todos : data;  
    }]  
  }),
  getTodosByUser: (id) => instance.get('todos/search/findByUser?user='+id, {
    transformResponse: [function (data) {
      return data? JSON.parse(data)._embedded.todos : data;
    }]
  }),
  // (U)pdate  
  updateForId: (id, text, completed) => instance.put('todos/'+id, {title: text, completed: completed}),  
  // (D)elete  
  removeForId: (id) => instance.delete('todos/'+id),
  checkUser: (id) => instance.get('users/'+id, {
    transformResponse: [function (data) {
      return data? JSON.parse(data) : data;
    }]
  })
}