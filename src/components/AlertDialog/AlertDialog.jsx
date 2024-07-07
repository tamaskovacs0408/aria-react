import { useState } from "react";

import classes from "./AlertDialog.module.scss";

const textAteraValue = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem enim consequuntur nulla vitae nisi odio velit ab odit? Odit ratione rerum consequatur aspernatur sequi pariatur quibusdam laborum excepturi voluptatem?"

export default function AlertDialog() {
  return (
    <div className={classes.wrapper}>
      <label htmlFor='notes'>Notes</label>
      <textarea name='notes' id='notes' defaultValue={textAteraValue}>
      </textarea>
      <div className={classes["button-container"]}>
        <button>Save</button>
        <button>Discard</button>
      </div>
    </div>
  );
}
