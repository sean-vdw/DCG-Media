import './App.css';

import Header from './components/Header';
import Posts from './components/Posts';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
