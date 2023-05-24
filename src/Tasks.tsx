import React from "react";

type TasksProps = {
    data: DataType
}

type TasksType = {
    taskId: number,
    title: string,
    isDone: boolean
}

type DataType = {
    title: string,
    tasks: TasksType[],
    students: string[]
}

export const Tasks = ({data}: TasksProps) => {
    return (
        <div>
            <h1>{data.title}</h1>
            <ul>
                {data.tasks.map(task => {
                    return(
                        <li><input type="checkbox" checked={task.isDone}/>{task.title}</li>
                    )
                })}
            </ul>
            <ul>
                {data.students.map(item => {
                    return (
                        <li>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}