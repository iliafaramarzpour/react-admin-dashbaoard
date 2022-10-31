const linkTo = (menu, navigate) => {
  if (menu.subMenu) {
    menu.activeDropdown = !menu.activeDropdown;
  } else {
    navigate(menu.pathName);
  }
};
const nestedMenu = () => {};
const findActiveMenu = () => {};

export { linkTo, nestedMenu, findActiveMenu };
