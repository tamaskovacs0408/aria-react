import { useState, useRef } from "react";
import AlertDialogModalPortal from "./AlertDialogModalPortal";

import classes from "./AlertDialog.module.scss";

const textAteraValue =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem enim consequuntur nulla vitae nisi odio velit ab odit? Odit ratione rerum consequatur aspernatur sequi pariatur quibusdam laborum excepturi voluptatem?";

export default function AlertDialog() {
  const [openModal, setOpenModal] = useState(false);
  const [isSaveButton, setisSaveButton] = useState(false);

  const saveButtonRef = useRef();
  const discardButtonRef = useRef();

  function handleButtonClick(isSaveButton) {
    setisSaveButton(isSaveButton)
    setOpenModal(prevState => !prevState);
  }

  return (
    <>
      <div className={classes.wrapper}>
        <label htmlFor='notes'>Notes</label>
        <textarea
          name='notes'
          id='notes'
          defaultValue={textAteraValue}
        ></textarea>
        <div className={classes["button-container"]}>
          <button ref={saveButtonRef} onClick={() => handleButtonClick(true)}>
            Save
          </button>
          <button ref={discardButtonRef} onClick={() => handleButtonClick(false)}>
            Discard
          </button>
        </div>
      </div>
      <AlertDialogModalPortal
        isModalOpen={openModal}
        ref={isSaveButton ? saveButtonRef : discardButtonRef}
        isSaveButton={isSaveButton}
        modalHandler={handleButtonClick}
      />
    </>
  );
}
