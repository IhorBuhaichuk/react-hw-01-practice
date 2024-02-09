import css from "./Alert.module.css";
import clsx from "clsx";
  
  export const Alert = ({ variant, children }) => {
  return <p className={clsx(css.alert, css[variant])}>{children}</p>;
};




//   Для обчислення фінального значення атрибуту className можна було використати блок if...else, 
//   інструкцію switch, тернарний оператор або будь-який інший синтаксис JavaScript, який дасть нам 
//   той же результат. Головне, щоб рядок з класами був складений правильно і не мав зайвих чи невалідних значень.