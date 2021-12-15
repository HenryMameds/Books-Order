import { CartContainer } from "./Cart_style";
import EnhancedTable from "../Components/CartContent";

const Cart = () => (
  <div style={{display: 'flex', justifyContent: 'center'}}>
    <CartContainer>
      <EnhancedTable />
    </CartContainer>
  </div>
);

export default Cart;
