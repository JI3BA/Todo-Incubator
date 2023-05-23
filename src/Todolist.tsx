import React from "react";

type PropsType = {
    truck: string,
    truck2?: number,
    truck3?: boolean,
    tasks: TaskType[]
}

type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}


export const Todolist = (props: PropsType) => {
    return(
        <div>
            <h3>{props.truck}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((item: TaskType) => <li><input type="checkbox" checked={item.isDone}/> <span>{item.title}</span></li>)}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}