import React from 'react';

const todo = ({ todo }) => {
    const { id, title, completed } = todo;
    const h1 = <h1>todo - {title}</h1>;
    const text = completed ? <s>{h1}</s> : h1;

    return (
        <div data-testid='todo-1' key={`todo-${id}`}>
            {text}
        </div>
    );
};

export default todo;
