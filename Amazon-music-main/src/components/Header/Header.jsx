import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Header.module.css';
import { Image } from 'react-bootstrap';
import amazon_music from '../../assets/amazon_music.png';
import { GoHome } from "react-icons/go";
import { useLocation, useNavigate } from 'react-router-dom';
import SearchBox from './SearchBox';
import DropDown from '../DropDown/DropDown';
import { CgProfile } from "react-icons/cg";
import { LinkContainer } from 'react-router-bootstrap';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

function Header() {
  const [items, setItems] = useState(['Sign In']);
 
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setItems(['Sign Out','Playlists']);
      } else {
        setItems(['Sign In']);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]);

  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const handleItemClick = async (item) => {
    if (item === 'Sign In') {
      navigate('/login');
    } else if (item === 'Sign Out') {
      await signOut(auth);
      toast.success("User logged out successfully");
      setItems(['Sign In']);
    }
    else if (item === 'Profile') {
      navigate('/profile');
    }
    else if (item === 'Playlists') {
      navigate('/myplaylist');
    }
  };

  return (
    <Navbar expand="lg" className={`${styles.nav} px-4 py-2`} data-bs-theme="dark">
      <LinkContainer to="/">
        <Navbar.Brand className="d-flex align-items-center">
          <Image src={amazon_music} alt="logo" width="140" height="26" className="d-inline-block align-top" />
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto d-flex align-items-center">
          <LinkContainer to="/">
            <Nav.Link className={`${currentPath === '/' ? 'active text-primary' : ''} d-flex align-items-center fw-bold ms-4`}>
              <GoHome size={25} className="me-2" /> HOME
            </Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className="ms-auto d-flex align-items-center gap-3">
          <SearchBox />
          <DropDown icon={<CgProfile size={25} />} items={items} onItemClick={handleItemClick} />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
