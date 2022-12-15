import React, { useEffect } from "react";

import Branch from "./Branch";

const Tree = ({ data }) => {
 
  return (
    <ul className="tree">
      {data?.length>0 &&data?.map((item) => (
        <Branch key={item.id} item={item} level={0} />
      ))}
    </ul>
  );
};

export default Tree;
