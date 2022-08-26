import Button from "./components/Button/Button.js";
import Checkbox from "./components/Checkbox/Checkbox";
import Dropdowns from "./components/Dropdowns/Dropdowns";
import Input from "./components/Input/Input";
import Radio from "./components/Radio/Radio";
import Searchbar from "./components/Searchbar/Searchbar";


function App() {
  return <div>
    <Input />
    <Searchbar />
    <Radio />
    <Checkbox />
    <Button />
    <Dropdowns></Dropdowns> 
  </div>
}

export default App;