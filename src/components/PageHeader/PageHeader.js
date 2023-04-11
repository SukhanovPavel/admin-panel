import {
  Button,
  TitleText
} from '../index';

import {
  BUTTON_SIZE as size,
  BUTTON_COLOR as color
} from '../Button/Button';

import styles from './PageHeader.module.css';
import {useState} from "react";

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
}
toggleDarkMode(useDark.matches);

let darkModeOn;
useDark.addListener((evt) => {
    darkModeOn = evt.matches;
    toggleDarkMode(evt.matches);
    console.log(`Тёмный режим ${darkModeOn ? '🌒 включен' : '☀️ выключен'}.`)
});  // отслеживаем изменение темы ОС


export const PageHeader = () => {

    const [themeSwitcherIcon, setThemeSwitcherIcon] = useState(true);

    return (
      <div className={styles.header}>
        <TitleText
          title={"Список заказов"}
        />
        <Button
          size={size.large}
          color={color.blueText}
          text={themeSwitcherIcon ? "Светлая тема" : "Тёмная тема"}
          icon={themeSwitcherIcon ? "Sun" : "Moon"}
          iconColor={"#459DF5"}
          handleClick={() => {
              document.documentElement.classList.toggle("dark-mode");
              setThemeSwitcherIcon(!themeSwitcherIcon);
              darkModeOn ? console.log("dark") : console.log("light")
          }}
        />
      </div>
    );
}