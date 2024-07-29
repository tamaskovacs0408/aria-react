import { useState } from "react";

import classes from "./ActionButton.module.scss";

export default function ActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  function handleButtonClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={classes.wrapper}>
      <button className={classes.btn} onClick={handleButtonClick}>Actions</button>
      {isOpen && (
      <ul className={classes.actions}>
        <li>Action 1</li>
        <li>Action 2</li>
        <li>Action 3</li>
        <li>Action 4</li>
      </ul>
      )} 
    </div>
  );
}
