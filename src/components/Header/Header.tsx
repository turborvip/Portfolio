import React, { useEffect, useState } from "react";
import { getGlobalState } from "../../utils/getGlobal";
import "./index.scss";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group, Burger } from "@mantine/core";

interface propsHeader {
  logo: string;
  menus: string[];
}
const props: propsHeader = {
  logo: "Turborvip",
  menus: ["Home", "About", "Service", "Portfolio", "Blog", "Contact"],
};
function Header() {
  const [isScroll, setScroll] = useState<boolean>(false);
  const [isCollapse, setCollapse] = useState<boolean>(false);
  const [isHamburger, { toggle }] = useDisclosure(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) setScroll(true);
      else setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.onresize = () => {
      const { device } = getGlobalState();
      const rect = document.body.getBoundingClientRect();
      setCollapse(rect.width < 992);
      // console.log("this is " + device, rect);
    };
  }, []);

  const renderOptionMenu = () => {
    if (isCollapse) {
      return (
        <Burger
          color={`${isScroll ? "#fff" : "#333"}`}
          opened={isHamburger}
          onClick={toggle}
        />
      );
    } else {
      return (
        <>
          {props.menus.map((menu, idx) => (
            <li className='option' key={idx}>
              {menu}
            </li>
          ))}
        </>
      );
    }
  };

  return (
    <div className='header__wrapper'>
      <ul className={`header__menu ${isScroll ? "header__menu--active" : ""}`}>
        <li
          className={`menu__logo ${isScroll ? "menu__logo--active" : ""}`}
        ></li>
        <li className='menu__option__wrapper'>
          <ul
            className={`menu__option ${isScroll ? "menu__option--active" : ""}`}
          >
            {renderOptionMenu()}
          </ul>
        </li>
      </ul>
      <Drawer
        opened={isHamburger}
        onClose={toggle}
        transition='slide-left'
        transitionDuration={250}
        transitionTimingFunction='ease'
        title='Turborvip'
        padding='xl'
        size='xl'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea sit
        earum ratione quisquam aliquam at nihil illum doloribus porro, facere
        cupiditate dolore cum aliquid eum voluptas ipsam, velit quo.
      </Drawer>
    </div>
  );
}

export default Header;
