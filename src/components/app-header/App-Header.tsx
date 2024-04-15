import React from "react";
import styles from "./app-header.module.css";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#!">
                <BurgerIcon type="primary" />
                <p className={styles["navigation__item"]}>Конструктор</p>
              </a>
            </li>
            <li>
              <a href="#!">
                <ListIcon type="secondary" />
                <p className={styles["navigation__item-secondary"]}>
                  Лента заказов
                </p>
              </a>
            </li>
          </ul>
        </nav>

        <Logo />

        <div className={styles["personal-area"]}>
          <ProfileIcon type="secondary" />
          <p>Личный кабинет</p>
        </div>
      </div>
    </header>
  );
}
