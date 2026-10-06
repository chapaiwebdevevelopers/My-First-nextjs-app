import React from 'react';

const TodoPages =async() => {
    // Fetch Data from API
        const response= await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        // console.log(todos)

    
    
    return (
          <div>
                <h2>TODO Pages</h2>
                <div className= "grid  grid-cols-4 gap-3" >
                      {todos.map(todo => (
                            <div
                                  key={todo.id}
                                  className= {`gap-3 ${todo.completed? "bg-accent":"bg-red-100"} `}
                            >
                                  <label className='card  text-accent-content'>
                                        <input
                                              type="checkbox"
                                              name="card-urgent-1"
                                        />
                                        <div className="card-body">
                                              <h2 className="card-title">
                                                    {todo.id}
                                              </h2>
                                              <p>{todo.title}</p>
                                        </div>
                                  </label>
                            </div>
                      ))}
                </div>
          </div>
    );
};

export default TodoPages;