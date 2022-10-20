
import {
  Button,
  Checkbox,
  Dropdowns,
  Input,
  Radio,
  Searchbar,
  PageHeader,
  FilterRow
} from './components/index';


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
}

export default App;