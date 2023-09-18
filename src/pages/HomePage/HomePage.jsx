import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.wrapperTitle}>
        <h1 className={styles.title1}>Миттєва свобода на чотирьох колесах!</h1>
        <h2 className={styles.title2}>Ваш комфорт - наші автомобілі.</h2>
      </div>
      <div className={styles.wrapper}></div>
    </div>
  );
};

export default HomePage;
