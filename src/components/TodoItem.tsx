import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{text: string, remove: () => void}> = (props) => {
  return (
    <li className={classes.item} onClick={props.remove}>{props.text}</li>
  );
};
export default TodoItem;
