
type PropsButton = {
    name:string,
    callback:()=>void
}

export const Button = (props:PropsButton) => {

    const onclickButtonHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onclickButtonHandler}>{props.name}</button>
    )
}