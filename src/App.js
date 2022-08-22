import Button from "./components/Button/Button.js";
import Checkbox from "./components/Checkbox/Checkbox";
import Dropdowns from "./components/Dropdowns/Dropdowns";
import Input from "./components/Input/Input";
import Radio from "./components/Radio/Radio";
import Searchbar from "./components/Searchbar/Searchbar";

import "./App.css"
function App() {
  return <body>
    <Input />
    <Searchbar />
    <div className = "checkbox-radio">
    <Radio />
    <Checkbox />
    </div>
    <Button />
    <Dropdowns />
    </body>
}

export default App;
