import './App.css';
import CategoryMovies from './pages/CategoryMovies';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routhPath } from './constants/route';
import Details from './pages/Details';
import ResultsList from './pages/ResultsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routhPath.categories} element={<CategoryMovies />} />
        <Route path={routhPath.invalid} element={<Home />} />
        <Route path={`${routhPath.details}/:id`} element={<Details />} />
        <Route path={`${routhPath.result}/:searchQuery`} element={<ResultsList />} />
      </Routes>
    </Router>
  );
}

export default App;
