import DropdownLayout from "../DropdownLayout";

type ShoppingCartDropdownProps = {
    setIsOpen: () => void;
  };
  
  const ShoppingCartDropdown = ({ setIsOpen }: ShoppingCartDropdownProps) => {
    return (
      <DropdownLayout setIsOpen={setIsOpen}>
        <h1>hola</h1>
      </DropdownLayout>
    );
  };
  
  export default ShoppingCartDropdown;