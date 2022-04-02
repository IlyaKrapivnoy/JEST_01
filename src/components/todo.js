import React from 'react';

const todo = ({ todo }) => {
    const { id, title, completed } = todo;

    return (
        <div data-testid='todo-1' key={id}>
            {title}: {completed ? 'done' : 'waiting'}
        </div>
    );
};

export default todo;
