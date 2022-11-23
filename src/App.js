import './App.css';
import { Users } from './users';
import Search_post from './searchpost';
import Table from './table';
function App() {
  return (
    <div className="App">
      <Search_post />
      <Table data={Users} />
    </div>
  );
}
export default App;
