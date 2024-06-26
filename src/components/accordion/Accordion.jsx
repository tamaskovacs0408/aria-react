import { useState } from "react";
import "./accordion.scss";

export default function Accordion() {
  const [activePanels, setActivePanels] = useState({});

  function handleAccordionPanel(panelIndex) {
    setActivePanels(prevState => ({
      ...prevState,
      [panelIndex]: !prevState[panelIndex],
    }));
  }

  return (
    <div className='accordion-wrapper'>
      <div className='accordion-container'>
        {[0, 1, 2].map(panelIndex => (
          <div key={panelIndex}>
            <div className='accordion-header'>
              <h3>
                <button
                  onClick={() => handleAccordionPanel(panelIndex)}
                  className={activePanels[panelIndex] ? "active" : ""}
                >
                  {panelIndex === 0
                    ? "Open first panel"
                    : panelIndex === 1
                    ? "Open second panel"
                    : "Open third panel"}
                </button>
              </h3>
            </div>
            <div
              className={`accordion-panel ${
                activePanels[panelIndex] ? "open" : ""
              }`}
            >
              <p>
                This is the{" "}
                {panelIndex === 0
                  ? "first"
                  : panelIndex === 1
                  ? "second"
                  : "third"}{" "}
                accordion panel
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
