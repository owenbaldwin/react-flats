import { Component, React } from "react";

class Flat extends Component {

  render() {




    return (
      <div className="flat">
        <div className="price">
          {this.props.flat.priceCurrency} {this.props.flat.price}
        </div>
        <div className="name">
          {this.props.flat.name}
        </div>
      </div>
    );
  }
}

export default Flat;
