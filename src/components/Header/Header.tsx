import React, { useEffect, useState } from "react";
import "./index.scss";
import { getGlobalState } from "../../utils/getGlobal";
import { useStore, actions } from "../../store";

import { useDisclosure } from "@mantine/hooks";
import { Drawer, Burger, Menu } from "@mantine/core";

function Header() {
  const [state, dispatch] = useStore();
  const menus = state?.menus;

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
          {menus.map((menu: string, idx: number) => (
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
        title='TURBORVIP'
        padding='xl'
        size='xl'
      >
        <Menu shadow="md" width={200}>
          {menus.map((menu: string, idx: number) => (
            <Menu.Item key={idx}>
              {menu}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </div>
  );
}

export default Header;
