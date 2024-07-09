import { createPortal } from "react-dom";
import AlertDialogModal from "./AlertDialogModal";

export default function AlertDialogModalPortal({
  isModalOpen,
  modalHandler,
  textAreaValue,
  deleteNotes
}) {
  return (
    <>
      {createPortal(
        <AlertDialogModal
          isModalOpen={isModalOpen}
          modalHandler={modalHandler}
          textAreaValue={textAreaValue}
          deleteNotes={deleteNotes}
        />,
        document.querySelector("#alter-dialog-modal-root")
      )}
    </>
  );
}
