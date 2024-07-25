import { useState } from "react";

export default function ActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  function handleButtonClick() {
    setIsOpen(prevState => !prevState);
  }

  return (
    <div>
      <button onClick={handleButtonClick}>Actions</button>
      {isOpen} && (
      <ul>
        <li>Action 1</li>
        <li>Action 2</li>
        <li>Action 3</li>
        <li>Action 4</li>
      </ul>
      )
    </div>
  );
}
