import checkBoxDone from '@/public/icons/checkbox_done.svg';
import checkBox from '@/public/icons/checkbox_none.svg';
import Image from "next/image";
import { useEffect, useState } from "react";
import { checkIcon, checkListName, checkListNameContainer } from "./checkListDetail.css";

interface TodoDetails {
  name: string;
  memo: string;
  imageUrl: string;
  isCompleted: boolean;
}

interface CheckListDetailProps {
  todoDetails: TodoDetails;
  setTodoDetails: React.Dispatch<React.SetStateAction<TodoDetails>>;
}

const CheckListDetail = ({ todoDetails, setTodoDetails }: CheckListDetailProps) => {
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

  console.log(todoDetails.isCompleted)

  return (
    <div className={checkListNameContainer}>
      {todoDetails.isCompleted ? (
        <Image src={checkBoxDone} alt="체크박스" className={checkIcon} />
      ) : (
        <Image src={checkBox} alt="체크박스" className={checkIcon} />
      )}
      {/* <div className={checkBoxTodoImage}></div> */}
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
