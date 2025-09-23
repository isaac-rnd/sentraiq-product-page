import Header from './components/Header';
import Platforms from './components/Platforms';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Platforms />
        <Dashboard />
      </main>
      <Footer />
    </>
  );
}

export default App;
