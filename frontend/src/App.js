import { HomePage, NotFound, NewProduct } from './pages/index';
import { Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';

function App() {
  return (
    <div className="bg-neutral-300 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <ProductProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new-product" element={<NewProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProductProvider>
      </div>
    </div>
  );
}

export default App;
