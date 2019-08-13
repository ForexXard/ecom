import React from "react";
import SHOP_DATA from "./shop.data";

import PrevewCollection from "../../components/prevew-collection/prevew-collection.component";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div ClassName="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <PrevewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
