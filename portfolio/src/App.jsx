import { Outlet } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';


function App() {
  return (
    <>
      <Nav />
      <body className="bg-dark">
        <main>
          <Outlet />
        </main>
        <Footer />
      </body>
    </>
  )
}

export default App
