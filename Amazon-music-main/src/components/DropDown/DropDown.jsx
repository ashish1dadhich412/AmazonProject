import Dropdown from "react-bootstrap/Dropdown";
import styles from "./DropDown.module.css";

function DropDown({ icon, items, onItemClick }) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-basic"
        variant="dark"
        className={`${styles.dropdown} rounded-circle p-2`}
      >
        {icon}
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.dropdown_menu_show}>
        {items?.map((item, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => onItemClick(item)}
          >
            {item}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;
