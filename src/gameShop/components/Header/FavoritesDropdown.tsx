import DropdownLayout from "../DropdownLayout";
type FavoritesDropdownProps = {
  setIsOpen: () => void;
};

const FavoritesDropdown = ({ setIsOpen }: FavoritesDropdownProps) => {
  return (
    <DropdownLayout setIsOpen={setIsOpen}>
      <h1>hola</h1>
    </DropdownLayout>
  );
};

export default FavoritesDropdown;
