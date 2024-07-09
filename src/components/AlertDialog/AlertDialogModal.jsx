import classes from "./AlertDialogModal.module.scss";

export default function AlertDialogModal ({ isModalOpen, modalHandler, textAreaValue }) {

    let notes = textAreaValue.value;


    return (
      isModalOpen && (
        <div className={classes["modal-wrapper"]}>
          <div className={classes["modal-container"]}>
            <h2>Confirmation</h2>
            <p>Are you sure want to discard all of your notes?</p>
            <p>{notes.split(" ").length} words will be deleted.</p>
            <button onClick={modalHandler}>Close</button>
          </div>
        </div>
      )
    );
  }
