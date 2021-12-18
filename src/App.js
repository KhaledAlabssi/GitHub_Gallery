import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/layers/Footer';
import Navbar from './components/layers/Navbar'

function App() {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>

        <Navbar />  
        <main className='container mz-auto px-3 pb-12'>Content</main>
        <Footer />

      </div>
    </Router>
    
  );
}

export default App;
