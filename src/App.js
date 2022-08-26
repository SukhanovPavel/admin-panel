import {
  Button,
    Checkbox,
    Dropdowns,
    Input,
    Radio,
    Searchbar,
} from './components/index'

function App() {
  return <div>
    <Input />
    <Searchbar />
    <Radio />
    <Checkbox />
    <Button />
    <Dropdowns 
      isOpen={false}
    />
  </div>
}

export default App;