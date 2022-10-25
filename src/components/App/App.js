
import {
  // Button,
  // Checkbox,
  // Dropdowns,
  // Input,
  // Radio,
  // Searchbar,
  PageHeader,
  FilterRow,
  Table
} from '../index';

// import styles from './App.module.css';

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
  <Table />
  </>
  )
}

export default App;