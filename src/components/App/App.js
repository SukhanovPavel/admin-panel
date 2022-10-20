
import {
  Button,
  Checkbox,
  Dropdowns,
  Input,
  Radio,
  Searchbar,
<<<<<<< HEAD:src/App.js
  PageHeader,
  FilterRow
} from './components/index';
=======
} from '../index';
>>>>>>> 8155c93c1e4f8eb0d2b4c23a17f8a219885c4d57:src/components/App/App.js

import styles from './App.module.css';

<<<<<<< HEAD:src/App.js
// function App() {
//   return <div>
//     <Input 
//       isErr={false}
//       isLock={true}
//       />
//     <Searchbar />
//     <Radio />
//     <Checkbox />
//     <Button />
//     <Dropdowns 
//       isOpen = {true}
//     />
//   </div>
// }

const App = () => {
  return (<>
  <PageHeader />
  <FilterRow />
  <div></div>
  </>
  )
=======
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
>>>>>>> 8155c93c1e4f8eb0d2b4c23a17f8a219885c4d57:src/components/App/App.js
}

export default App;