import { CiCircleCheck } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

import styled from "styled-components";


export function TodoCard({title,done,id,todos,setTodos}) {
    function handleDeleteOnClick() {
        setTodos(todos.filter(todo => {
            return todo.id !== id;
            })
        )
    }

    function handleToggleOnClick() {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done;
                }
                return todo;
            }) 
        )
    }

    return(
        <StyledTodoContainer done={done}>
            <TodoText done={done}>{title}</TodoText>
            <CiCircleCheck onClick={handleToggleOnClick}/>
            <FaRegTrashAlt onClick={handleDeleteOnClick}/>
        </StyledTodoContainer>
    )
}



const TodoText  = styled.p`
    display: inline;
`

//Einem Styled Element kann man auch JS Code übergeben
//Hier wird einem anynonyme Funktion aufgerufen, welches auf das props Argument
//zugreift und per tenary operator den CSS - Wert setzt
const StyledTodoContainer = styled.div`
    font-family: Arial, Helvetica, sans-serif,
    color: #41B3A3;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-bottom: 5px;
    color: ${(props) => props.done ? "green" : "red"};
`