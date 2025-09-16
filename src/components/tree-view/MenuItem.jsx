import MenuList from './MenuList.jsx';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function MenuItem({ item }) {
  const [displayCurrentChild, setDisplayCurrentChild] = useState([]);

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayCurrentChild({
      ...displayCurrentChild,
      [getCurrentLabel]: !displayCurrentChild[getCurrentLabel],
    });
  };
  console.log(displayCurrentChild);
  return (
    <li>
      <div className="flex gap-5 items-center cursor-pointer text-white">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrentChild[item.label] ? (
              <FaMinus size={25} color="white" />
            ) : (
              <FaPlus size={25} color="white" />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChild[item.label] ? (
        <div className="pl-5">
          <MenuList list={item.children} />
        </div>
      ) : null}
    </li>
  );
}
