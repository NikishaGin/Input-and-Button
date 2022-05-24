import React, {ChangeEvent} from "react";

type PropsInput = {
    title:string
    setTitle:(title:string)=>void
}



export const Input = (props:PropsInput) => {

    const onChangeInputHandler =(event:ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(event.currentTarget.value)
    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    )
}