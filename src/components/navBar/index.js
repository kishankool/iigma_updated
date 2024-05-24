import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './nav.module.css';
import { useState } from 'react';
import ImageUrl from '../../../public/logo-primary.png'
import Image from 'next/image'

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [subMenuStates, setSubMenuStates] = useState({});

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setSubMenuStates({}); // Close all submenus when toggling the main menu
  };

  const toggleSubMenu = (menuKey) => {
    setSubMenuStates(prevState => ({
      ...prevState,
      [menuKey]: !prevState[menuKey]
    }));
  };

  return (
    <nav className={styles.menuBar}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`${styles.menuList} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li className={styles.menuItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${styles.menuItem} ${styles.hasSubMenu}`} onClick={() => toggleSubMenu('services1')}>
          <span>Services</span>
          <ul className={`${styles.subMenuList} ${subMenuStates.services1 ? styles.subMenuOpen : ''}`}>
            <li className={styles.subMenuItem}>
              <Link href="/services/service1">Service 1</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/services/service2">Service 2</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/services/service3">Service 3</Link>
            </li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={`${styles.menuItem} ${styles.hasSubMenu}`} onClick={() => toggleSubMenu('services2')}>
          <span>Other Services</span>
          <ul className={`${styles.subMenuList} ${subMenuStates.services2 ? styles.subMenuOpen : ''}`}>
            <li className={styles.subMenuItem}>
              <Link href="/other-services/service1">Service 1</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/other-services/service2">Service 2</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/other-services/service3">Service 3</Link>
            </li>
          </ul>
        </li>
        <li className={`${styles.menuItem} ${styles.hasSubMenu}`} onClick={() => toggleSubMenu('services3')}>
          <span>Additional Services</span>
          <ul className={`${styles.subMenuList} ${subMenuStates.services3 ? styles.subMenuOpen : ''}`}>
            <li className={styles.subMenuItem}>
              <Link href="/additional-services/service1">Service 1</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/additional-services/service2">Service 2</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/additional-services/service3">Service 3</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image src={ImageUrl} alt="Logo" className={styles.logo} />
        </Link>
      </div>
    </nav>
  );
};

export default MenuBar;
