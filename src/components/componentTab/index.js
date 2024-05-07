// components/NavBar.js
import { useState } from 'react';
import styles from './NavBar.module.css'; // Import CSS module
import Discription from '../courseDtailNavDisc/discription'
import Curriculam from '../courseDtailNavDisc/curriculum'
import SkilledLecture from '../courseDtailNavDisc/skilledLecture'
import Faq from '../courseDtailNavDisc/faq'
import Download from '../courseDtailNavDisc/download'
const NavBar = () => {
  const [selectedItem, setSelectedItem] = useState('Description');

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <div className={styles.navbar}>
        <nav>
          <ul className={styles.navlist}>
            <li className={selectedItem === 'Description' ? styles.active : null} onClick={() => handleClick('Description')}>Description</li>
            <li className={selectedItem === 'Curriculum' ? styles.active : null} onClick={() => handleClick('Curriculum')}>Curriculum</li>
            <li className={selectedItem === 'Lecturer' ? styles.active : null} onClick={() => handleClick('Lecturer')}>Lecturer</li>
            <li className={selectedItem === 'Faq' ? styles.active : null} onClick={() => handleClick('Faq')}>Faq</li>
            <li className={selectedItem === 'Download' ? styles.active : null} onClick={() => handleClick('Download')}>Download</li>
          </ul>
        </nav>
      </div>
      <div className={styles.content}>
        {selectedItem && (
          <div>
            <h2>{selectedItem}</h2>
            {/* Render related content based on the selected item */}
            {selectedItem === 'Description' && <Discription />}
            {selectedItem === 'Curriculum' && <p><Curriculam/></p>}
            {selectedItem === 'Lecturer' && <p><SkilledLecture/></p>}
            {selectedItem === 'Faq' && <p><Faq/></p>}
            {selectedItem === 'Download' && <p><Download/></p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
