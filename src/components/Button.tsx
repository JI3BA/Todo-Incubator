import React, {MouseEventHandler} from "react";

interface  IButton{
    children: React.ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({children, onClick }: IButton) => {
    return <button onClick={onClick}>{children}</button>
}