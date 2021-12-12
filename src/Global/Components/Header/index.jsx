import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  if (["/login"].includes(pathname)) return null;

  if (["/register"].includes(pathname)) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "2%",
        backgroundColor: "#87ceeb",
        padding: "2%",
        borderRadius: "5px",
      }}
    >
      <div>HMSOrder</div>
      <div>Ver Carrinho</div>
    </div>
  );
};

export default Header;
