import { Route, Routes } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
function App() {
  return (
    <div>
      <h1>Routes</h1>
      <Routes>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
