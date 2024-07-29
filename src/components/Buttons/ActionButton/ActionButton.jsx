import { useState } from 'react'
import classes from './ActionButton.module.scss'

export default function ActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedAction, setSelectedAction] = useState('')

  function handleButtonClick() {
    setIsOpen(!isOpen)
  }

  function handleActionClick(e) {
    setSelectedAction(e.target.getAttribute('data-value'))
  }

  return (
    <div className={classes.wrapper}>
      <p>Last action: <span>{selectedAction}</span></p>
      <button className={classes.btn} onClick={handleButtonClick}>
        Actions
      </button>
      {isOpen && (
        <ul className={classes.actions}>
          <li data-value='Action 1' onClick={handleActionClick}>
            Action 1
          </li>
          <li data-value='Action 2' onClick={handleActionClick}>
            Action 2
          </li>
          <li data-value='Action 3' onClick={handleActionClick}>
            Action 3
          </li>
          <li data-value='Action 4' onClick={handleActionClick}>
            Action 4
          </li>
        </ul>
      )}
    </div>
  )
}
