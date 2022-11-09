import UserMenu from "./header/UserMenu";
import Help from "./header/Help";
import Notifications from "./header/Notifications";
import SearchModal from "./header/SearchModal";

function Header() {
  
  return (
    <>
      <header className="bg-white p-4 flex justify-start flex-row-reverse">
        <UserMenu />
        <div className="divider flex items-center mr-1">
          <span className="h-6 bg-gray-400 border-l border-gray-300"></span>
        </div>
        <Help />
        <Notifications />
        <SearchModal />
      </header>
    </>
  );
}

export default Header;
