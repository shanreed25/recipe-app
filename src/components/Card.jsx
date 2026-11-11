import { Link } from "react-router";
import { styles } from "../styles/styles";

export function Card({ to, name, image }) {
  return (
    <li>
      <Link to={to} className={styles.card}>
        <img src={image} alt={name}  width={400} />
        <h3 className="mt-2 font-extrabold">{name}</h3>
      </Link>
    </li>
  );
}
