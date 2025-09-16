import { useState } from 'react';
import data from './data.js';
// import "./styles.css";
/* single selection
multiple selection */

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setmultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexofCurrId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexofCurrId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexofCurrId);

    setmultiple(cpyMultiple);
    console.log(cpyMultiple, selected);
  }
  return (
    <div className="flex h-screen w-screen justify-center items-center flex-col gap-[30px]">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className="bg-[#614101] text-[white] font-[bold] text-xl cursor-pointer px-5 py-2.5"
      >
        Enable multi-selection
      </button>
      <div className="w-[500px]">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="bg-[#614101] mb-2.5 py-2.5 px-5 ">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
              >
                <h3 className="flex text-white justify-between items-center cursor-pointer">
                  {dataItem.title}
                </h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="text-white h-auto">{dataItem.content}</div>
                  )
                : selected === dataItem.id && (
                    <div className="text-white h-auto">{dataItem.content}</div>
                  )}
              {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.content}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data present</div>
        )}
      </div>
    </div>
  );
}
