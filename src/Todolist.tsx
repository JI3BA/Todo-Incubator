import React, {useState} from "react";

type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}


export const Todolist = () => {
    const [data, setData] = useState<TaskType[]>([
        {id: 0, title: 'What is it', isDone:true},
        {id: 1, title: 'Dont give that', isDone:false}
    ])

    return(
        <div>
            <h3>{}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {data.map((item: TaskType) => <li><input type="checkbox" checked={item.isDone}/> <span>{item.title}</span></li>)}
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}