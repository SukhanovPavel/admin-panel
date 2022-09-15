import {
  Button,
  Checkbox,
  Dropdowns,
  Input,
  Radio,
  Searchbar,
} from '../index';

import styles from './App.module.css';

function App() {
  return <div className={styles.flex}>
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