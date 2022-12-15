import React from "react";

const Node = ({ item, hasChildren, level, onToggle }) => {
  return (
    <li style={{ paddingLeft: `${level * 5}%` }}>
      <span className="tree_label" onClick={onToggle}>{item.name}</span>
      {/* {hasChildren && <button onClick={onToggle}>toggle</button>} */}
    </li>
  );
};

export default Node;
