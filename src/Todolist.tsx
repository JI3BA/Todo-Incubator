import React, {useEffect, useState} from "react";
import {Button} from "./components/Button";

type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}


export const Todolist = () => {
    const [data, setData] = useState<TaskType[]>([
        {id: 0, title: 'What is it', isDone: true},
        {id: 1, title: 'Dont give that', isDone: false}
    ])

    const [filterData, setFilterData] = useState<TaskType[]>([])

    const [note, setNote] = useState<TaskType>({
        id: data.length,
        title: '',
        isDone: false
    })

    useEffect(() => {
        setFilterData(data)
    }, [data])

    const addNote = () => {
        setNote({id: data.length + 1, title: '', isDone: false})
        setData([...data, note])
    }

    const removeTask = (id: number) => {
        setData(data.filter((item: TaskType) => id !== item.id))
    }

    const showAllTask = () => {
        setFilterData(data)
    }

    const showActiveTask = () => {
        setFilterData(data.filter(item => !item.isDone))
    }

    const showCompletedTask = () => {
        setFilterData(data.filter(item => item.isDone))
    }

    return(
        <div>
            <h3>Notes</h3>
            <div>
                <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNote({...note, title: event.target.value})} value={note.title}/>
                <Button onClick={() => addNote()}>+</Button>
            </div>
            <ul>
                {filterData.map((item: TaskType) =>
                    <li key={item.id}><input type="checkbox" />
                        <span>{item.title}</span>
                        <Button onClick={() => removeTask(item.id)}>x</Button>
                    </li>)}
            </ul>
            <div>
                <Button onClick={() => showAllTask()}>All</Button>
                <Button onClick={() => showActiveTask()}>Active</Button>
                <Button onClick={() => showCompletedTask()}>Completed</Button>
            </div>
        </div>
    )
}