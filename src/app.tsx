import { hot } from 'react-hot-loader/root';

import React, { useState, lazy, Suspense} from 'react';
import { List } from 'immutable';

import ContentWrapper from './components/ContentWrapper';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';

import { Todo } from './components/TodoList';

import './style.scss';

const TodoList = lazy(() => import('./components/TodoList'));

const todoList: List<Todo> = List([
    {id: 1, description: 'todo 1', isChecked: false},
    {id: 2, description: 'todo 2', isChecked: false},
    {id: 3, description: 'todo 3', isChecked: true}
])

const App: React.FC = () => {
    const [showTodoList, setShowTodoList] = useState(false);

    return (
        <ContentWrapper
            topbarContent={<Header title="Header in ContentWrapper" />}
            content={
                <button
                    onClick={() => setShowTodoList(!showTodoList)}
                >
                    {showTodoList ? 'Hide todo list' : 'Show todo list'}!
                </button>
            }
            leftSidebarContent={
                showTodoList && (
                    <ErrorBoundary>
                        <Suspense fallback={<div>waiting...</div>}>
                        <TodoList todoList={todoList}/>
                        </Suspense>
                    </ErrorBoundary>
                )
            }
        />
    )
}

export default hot(App);