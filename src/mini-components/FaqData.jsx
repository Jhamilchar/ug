import { Accord, Description } from "../css-styled/cardFaq";
import { useState } from "react";


export const FaqData = ({titlee, descriptionn, i}) => {

    const [selected, setSelected] = useState(null);


    const toggle = (i) => {
          if(selected === i) {
            return setSelected(null)
          }

          setSelected(i)
      }

  return (
    <Accord>
      <div className="title" onClick={() => toggle(i)}>
        <h2>{titlee}</h2>
        <span>{selected === i ? "-" : "+"}</span>
      </div>
      <Description className={selected === i ? "content show" : "content"}>
        {descriptionn}
      </Description>
    </Accord>
  );
}
