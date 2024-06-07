import logo from './logo.svg';
import './App.css';
import AddPhotos from './components/AddPhotos';
import SearchPhoto from './components/SearchPhoto';
import DeletePhoto from './components/DeletePhoto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewallPhotot from './components/ViewallPhotot';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddPhotos/>}/>
    <Route path='/search' element={<SearchPhoto/>}/>
    <Route path='/delete' element={<DeletePhoto/>}/>
    <Route path='/view' element={<ViewallPhotot/>}/>
    
   </Routes>
   </BrowserRouter>
  );
}

export default App;
