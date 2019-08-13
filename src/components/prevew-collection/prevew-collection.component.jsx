import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import "./prevew-collection.style.scss";

const PrevewCollection = ({ title, items, id }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default PrevewCollection;
