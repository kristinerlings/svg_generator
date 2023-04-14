import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
/* import './Root.css'; */
import { useNavigation } from 'react-router-dom';

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <Navbar />
      <main>
        <div
          className={`wrapper ${
            navigation.state === 'loading' ? 'loading' : ''
          }`}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Root;
