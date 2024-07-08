import { forwardRef } from "react";
import classes from "./AlertDialogModal.module.scss";

const AlertDialogModal = forwardRef(
  ({ isModalOpen, modalHandler, isSaveButton }, ref) => {
    return (
      isModalOpen && (
        <div className={classes["modal-wrapper"]} onClick={modalHandler}>
          <div className={classes["modal-container"]} ref={ref}>
            {isSaveButton ? (
              <>
                <h2>Save Action</h2>
                <p>Content for save action.</p>
              </>
            ) : (
              <>
                <h2>Discard Action</h2>
                <p>Content for discard action.</p>
              </>
            )}
            <button onClick={modalHandler}>Close</button>
          </div>
        </div>
      )
    );
  }
);

export default AlertDialogModal;
