import DropdownAccount from './dropdownAccount';

const Index = () => {
  return (
    <div className="h-[76px] px-24 shadow-lg flex items-center justify-between">
      <img src="/assets/images/logo.png" className="w-[181px] h-[52px]" alt="" />

      <DropdownAccount />
    </div>
  );
};

export default Index;
