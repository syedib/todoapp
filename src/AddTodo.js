import React from 'react';

class AddTodo extends React.Component
{
    state = {
        content: ''
    }
    handleOnChange = (e)=>{
        this.setState({
            content: e.target.value
        })
    }
    render(){
        return(
            <form onSubmit={(e)=>{
                e.preventDefault();
                //addTodos(this.state);
                this.props.addTodos(this.state)
                this.setState({
                    content: ''
                });
            }}>
                <label>Add todo:</label>
                <input type="text" onChange={this.handleOnChange} value={this.state.content}/>
            </form>
        );
    }
}

export default AddTodo;