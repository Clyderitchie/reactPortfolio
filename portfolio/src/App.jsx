import { Outlet } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';


function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
        <Footer />
      </main>
       
    </>
  )
}

export default App
