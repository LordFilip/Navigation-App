import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

const formatDate = (date) => {
  try {
    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  } catch (error) {
    console.error("Invalid date format:", date);
    return "Invalid date";
  }
};

const flagemojiToPNG = (flag) => {
  try {
    const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return (
      <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
    );
  } catch (error) {
    console.error("Error converting flag emoji:", flag);
    return <span>{flag}</span>;
  }
};

export default function CityItem({ city }) {
  const { cityName, emoji, date, id } = city;

  if (!cityName || !emoji || !date) {
    console.error("Missing city data:", city);
    return <li className={styles.cityItem}>Invalid city data</li>;
  }

  return (
    <li>
      <Link className={styles.cityItem} to={`${id}`}>
        <span className={styles.emoji}>{flagemojiToPNG(emoji)}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
