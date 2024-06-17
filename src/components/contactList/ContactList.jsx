
import Contact from "../../components/contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectVisibleName } from "../../redux/contacts/selectors";
export default function ContactList() {
   const visibleName = useSelector(selectVisibleName);
   return (
    <ul className={css.list}>
      {visibleName.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}