import { createPortal } from "react-dom";
import AlertDialogModal from "./AlertDialogModal";

export default function AlertDialogModalPortal({ isModalOpen, modalHandler, textAreaValue }) {
  return (
    <>
      {createPortal(
        <AlertDialogModal
          isModalOpen={isModalOpen}
          modalHandler={modalHandler}
          textAreaValue={textAreaValue}
        />,
        document.querySelector("#alter-dialog-modal-root")
      )}
    </>
  );
}
