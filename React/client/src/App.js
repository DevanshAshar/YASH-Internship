import './App.css';
import Kingdom from './Components/day1/Kingdom';
import UserTable from './Components/day1/UserTable';
import users from './Components/day1/users';
import UserTableWithState from './Components/day1/UserTableWithState';
import UserTableClass from './Components/day1/UserTableClass';
import LivingThings from './Components/day1/LivingThings';
import Counter from './Components/day1/Counter';
import CounterClass from './Components/day1/CounterClass';
import Api from './Components/day1/Api';
import Employee from './Components/day1/Employee';
import Form from './Components/day1/Form';
import EmployeeCRUD from './Components/day1/EmployeeCrud';

function App() {
  return (
    <div className="App">
      <Kingdom/>
      <UserTable users={users} />
      <UserTableWithState />
      <UserTableClass />
      <LivingThings/>
      <Counter/>
      <CounterClass/>
      <Api/>
      <Employee/>
      <Form/>
      <EmployeeCRUD/>
    </div>
  );
}

export default App;
