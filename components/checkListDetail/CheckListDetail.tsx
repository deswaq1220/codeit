import { useEffect, useState } from "react";
import { checkBoxTodoImage } from "../checkList/checkListTodo/checkListTodo.css";
import { checkListName, checkListNameContainer } from "./checkListDetail.css";

const CheckListDetail = ({ todoDetails, setTodoDetails }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(todoDetails.name);

  useEffect(() => {
    setInputValue(todoDetails.name);
  }, [todoDetails.name]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    if (inputValue.trim()) {
      setTodoDetails((prevDetails) => ({
        ...prevDetails,
        name: inputValue
      }));
    } else {
      setInputValue(todoDetails.name);
    }
    setIsEditing(false);
  };

  return (
    <div className={checkListNameContainer}>
      <div className={checkBoxTodoImage}></div>
      {isEditing ? (
        <input
          className={checkListName}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <p onClick={() => setIsEditing(true)}><u>{todoDetails.name}</u></p>
      )}
    </div>
  );
};

export default CheckListDetail;
