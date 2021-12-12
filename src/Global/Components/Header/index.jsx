import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = location;

    if (['/login'].includes(pathname)) return null;

    if (['/register'].includes(pathname)) return null;


  return (
      <div>Header</div>
  );
};

export default Header;