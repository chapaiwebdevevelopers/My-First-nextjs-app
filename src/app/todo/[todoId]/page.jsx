import React from 'react';

const SingleTodo = async({params}) => {
    const {todoId}=await params;
    const resp = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    const todo = await resp.json();
    
    return (
        <div >
                <h1>{todo.id}</h1>
                <p>{todo.title}</p>

        </div>
    );
};

export default SingleTodo;