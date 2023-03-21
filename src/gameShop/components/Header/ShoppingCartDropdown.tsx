import DropdownLayout from "../DropdownLayout";

type ShoppingCartDropdownProps = {
    setIsOpen: () => void;
  };
  
  const ShoppingCartDropdown = ({ setIsOpen }: ShoppingCartDropdownProps) => {
    return (
      <DropdownLayout setIsOpen={setIsOpen}>
        <h1>Shopping cart</h1>
      </DropdownLayout>
    );
  };
  
  export default ShoppingCartDropdown;