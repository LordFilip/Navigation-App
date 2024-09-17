import styles from "./CountryItem.module.css";

const flagemojiToPNG = (flag) => {
  try {
    const countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
      .map((char) => String.fromCharCode(char - 127397).toLowerCase())
      .join("");
    return (
      <img
        src={`https://flagcdn.com/24x18/${countryCode}.png`}
        alt="flag"
        className={styles.flagImage}
      />
    );
  } catch (error) {
    console.error("Error converting flag emoji:", flag);
    return <span>{flag}</span>;
  }
};

function CountryItem({ country }) {
  const { emoji, country: countryName } = country;

  if (!emoji || !countryName) {
    console.error("Missing country data:", country);
    return <li className={styles.countryItem}>Invalid country data</li>;
  }

  return (
    <li className={styles.countryItem}>
      <span>{flagemojiToPNG(emoji)}</span>
      <span>{countryName}</span>
    </li>
  );
}

export default CountryItem;
