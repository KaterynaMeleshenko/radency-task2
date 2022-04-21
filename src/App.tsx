import './App.css';
import MainTable from "./pages/MainTable";
import Archive from "./pages/ArchiveTable";
import CategoryTable from "./pages/CategoryTable";



function App() {
  return (
    <div className="container">
      <MainTable/>
      <Archive/>
      <CategoryTable/>
    </div>
  );
}

export default App;
