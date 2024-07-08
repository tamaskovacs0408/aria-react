import { forwardRef } from "react";
import { createPortal } from "react-dom";
import AlertDialogModal from "./AlertDialogModal";

const AlertDialogModalPortal = forwardRef(
  ({ isModalOpen, modalHandler, isSaveButton }, ref) => {
    return (
      <>
        {createPortal(
          <AlertDialogModal
            isModalOpen={isModalOpen}
            modalHandler={modalHandler}
            ref={ref}
            isSaveButton={isSaveButton}
          />,
          document.querySelector("#alter-dialog-modal-root")
        )}
      </>
    );
  }
);

export default AlertDialogModalPortal;
