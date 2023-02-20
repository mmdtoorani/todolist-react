export const Task = (props) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: props.completed ? "green" : "white"
            }}
        >
            <h3> {props.taskName} </h3>
            <button onClick={() => props.completeTask(props.id)}>complete</button>
            <button onClick={() => props.deleteTaskHandler(props.id)}>delete</button>
        </div>
    )
}