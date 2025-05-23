import { BrowserRouter, Route, Routes } from 'react-router';
import { ShopHeader } from './components/ShopHeader';
import { ProductDetailsPage } from './screens/ProductDetailsPage';
import { ProductListPage } from './screens/ProductListPage';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/DN_TakeHomeAssessment/'}>
      <ShopHeader />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App
