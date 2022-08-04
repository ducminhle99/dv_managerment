import DropdownAccount from './dropdownAccount';

const Index = () => {
  return (
    <div className="h-[76px] px-24 shadow-lg flex items-center justify-between fixed left-0 right-0 top-0 z-50 bg-[#ffff]">
      <img src="/assets/images/hybrid.png" className="w-[181px] h-[52px]" alt="" />

      <DropdownAccount />
    </div>
  );
};

export default Index;
