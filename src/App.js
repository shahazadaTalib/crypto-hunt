import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CoinPage from './pages/CoinPage';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(()=>({
  App:{
    backgroundColor:'#14161a',
    color:'white',
    minHeight:'100vh',
  }
}))
function App() {
  const classes = useStyles();
  return (
   <BrowserRouter>
   <div className={classes.App}>
    <Header/>
   <Routes>
   <Route path='/' Component={Homepage} />
    <Route path='/coins/:id' Component={CoinPage}/>
   </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
