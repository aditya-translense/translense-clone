import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
