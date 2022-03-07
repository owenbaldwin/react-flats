import { React } from "react";
import { Flat } from "./flat";

class App extends Component {


  render() {
    return (
      <div>
        <div className="left-scene">
          <Flat />
        </div>
        <div className="right-scene">

        </div>
      </div>
    );
  }
}

export default App;
