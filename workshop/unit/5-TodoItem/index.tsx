import React from "react"
import useDialog from "../4-useDialog"

interface TodoItemProps {
  text: string
  checked: boolean
  onChange: (checked: boolean) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ text, checked, onChange }) => {
  const textColor = checked ? "#999" : "#000"

  const { handleOpen } = useDialog("Delete Todo", "Are you sure you want to delete this todo?")

  const handleDeleteTodoItem = () => {
    handleOpen()
  }

  return (
    <div>
      <input type="checkbox" checked={checked} onChange={event => onChange(event.target.checked)} />
      <p style={{ color: textColor }}>{text}</p>
      <button onClick={handleDeleteTodoItem}>delete</button>
    </div>
  )
}

export default TodoItem
