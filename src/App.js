import {
  Button,
  Checkbox,
  Dropdowns,
  Input,
  Radio,
  Searchbar,
} from './components/index';


function App() {
  return <div>
    <Input 
      isErr={false}
      isLock={true}
      />
    <Searchbar />
    <Radio />
    <Checkbox />
    <Button />
    <Dropdowns 
      isOpen = {true}
    />
  </div>
}

export default App;