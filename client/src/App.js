import './App.css';
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Head from './Components/Head';
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import {Routes,Route} from 'react-router-dom'
import ProductPage from './Pages/ProductPage';
import InvoiceProcessingPage from './Pages/InvoiceProcessingPage';
import ResumeUpload from './Pages/ResumeUpload';
import InvoiceUpload from './Pages/InvoiceUpload';

const theme = createTheme();

const useStyles = makeStyles((theme) => {
  root: {
    // some CSS that accesses the theme
  }
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
        <Head/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/product' element={<ProductPage/>}/>
          <Route path='/invoice' element={<InvoiceProcessingPage/>}/>
          <Route path='/invoiceupload' element={<InvoiceUpload/>}/>
          <Route path='/resumeupload' element={<ResumeUpload/>}/>
        </Routes>
        <Footer/>
    </ThemeProvider>
    </>
  );
}

export default App;
