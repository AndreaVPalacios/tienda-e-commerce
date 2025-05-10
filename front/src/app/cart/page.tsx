import AuthProtected from "../components/AuthProtected/AuthProtected";
import CartComponent from "./cartcomponent";

const Cart = () => {
  return (
    <div>
      <AuthProtected>
        <CartComponent />
      </AuthProtected>
    </div>
  );
};

export default Cart;
