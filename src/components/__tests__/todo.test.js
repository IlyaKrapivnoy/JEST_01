import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../todo';

test('should render non-completed todo item', () => {
    const todo = { id: 1, title: 'wash dishes', completed: false };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash dishes');
});

test('should render completed todo item', () => {
    const todo = { id: 2, title: 'make dinner', completed: true };
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('make dinner');
});
