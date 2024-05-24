import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import styles from './nav.module.css';
import { useState } from 'react';
import Image from 'next/image';

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
          <Link href="/">HOME</Link>
        </li>
        <li className={`${styles.menuItem} ${styles.hasSubMenu}`} onClick={() => toggleSubMenu('about')}>
          <span>ABOUT</span>
          <ul className={`${styles.subMenuList} ${subMenuStates.about ? styles.subMenuOpen : ''}`}>
            <li className={styles.subMenuItem}>
              <Link href="/aboutus/aboutIIgma">ABOUT IIGMA</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/aboutus/vision">VISION</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/aboutus/directorsMessage">BOARD OF ADVISORS</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/aboutus/recognition">RECOGNITION</Link>
            </li>
          </ul>
        </li>
        <li className={`${styles.menuItem} ${styles.hasSubMenu}`} onClick={() => toggleSubMenu('academicPrograms')}>
          <span>ACADEMIC PROGRAMS</span>
          <ul className={`${styles.subMenuList} ${subMenuStates.academicPrograms ? styles.subMenuOpen : ''}`}>
            <li className={styles.subMenuItem}>
              <Link href="/academicProgram/certificateCourse">Certificate Course</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/academicProgram/pgDiploma">PG Diploma</Link>
            </li>
          </ul>
        </li>
        <li className={`${styles.menuItem} ${styles.hasSubMenu}`} onClick={() => toggleSubMenu('faculties')}>
          <span>FACULTIES</span>
          <ul className={`${styles.subMenuList} ${subMenuStates.faculties ? styles.subMenuOpen : ''}`}>
            <li className={styles.subMenuItem}>
              <Link href="/faculties/facultyProfile">Faculty Profile</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/faculties/visitingFaculty">Visiting Faculty</Link>
            </li>
          </ul>
        </li>
        <li className={`${styles.menuItem} ${styles.hasSubMenu}`} onClick={() => toggleSubMenu('studentAndAlumni')}>
          <span>STUDENT AND ALUMNI</span>
          <ul className={`${styles.subMenuList} ${subMenuStates.studentAndAlumni ? styles.subMenuOpen : ''}`}>
            <li className={styles.subMenuItem}>
              <Link href="/studentAndAlumni/batchProfile">Batch Profile</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/studentAndAlumni/internship">Internship</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/studentAndAlumni/infrastructure">Infrastructure</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/studentAndAlumni/placement">Placements</Link>
            </li>
          </ul>
        </li>
        <li className={`${styles.menuItem} ${styles.hasSubMenu}`} onClick={() => toggleSubMenu('admissions')}>
          <span>ADMISSIONS</span>
          <ul className={`${styles.subMenuList} ${subMenuStates.admissions ? styles.subMenuOpen : ''}`}>
            <li className={styles.subMenuItem}>
              <Link href="/admissions/courseLebm">Course LEBM</Link>
            </li>
            <li className={styles.subMenuItem}>
              <Link href="/admissions/PgDeploma">PG Diploma</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
