import React from 'react';
import AddTodo from './AddTodo';
import Todos from './todos';

class TodoApp extends React.Component{
    state = {
        todos:[
          {id: 1, content: 'buy some food'},
          {id: 2, content: 'need to wash clothes'}
        ]
      };
      deleteTodo = (id) => {
          const todos = this.state.todos.filter(todo=>{
            return todo.id !== id;
          });
          this.setState({
            todos: todos
          });
      }
      addTodos = ({content}) => {
        const todo = {id: Math.random(), content: content};
        console.log(todo);
        const todos = [...this.state.todos, todo];
        this.setState({
          todos
        })
        //this.setState([...todos, todo]);
      }

      render(){
          return(
            <div className="todo-app container">
                <h1 className="center text-blue"> Todo's </h1>
                <Todos deleteTodo={this.deleteTodo} todos={this.state.todos} />
                <AddTodo addTodos={this.addTodos}/>
            </div>
          );
      }
}

export default TodoApp;