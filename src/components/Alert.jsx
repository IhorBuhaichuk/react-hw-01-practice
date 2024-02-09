import "./Alert.css";
import clsx from "clsx";
  
  export const Alert = ({ variant, outlined, elevated, children }) => {
    return (
      <p
        className={clsx("alert", variant, {
          "is-outlined": outlined,
          "is-elevated": elevated,
        })}
      >
        {children}
      </p>
    );
  };
  
  


//   Для обчислення фінального значення атрибуту className можна було використати блок if...else, 
//   інструкцію switch, тернарний оператор або будь-який інший синтаксис JavaScript, який дасть нам 
//   той же результат. Головне, щоб рядок з класами був складений правильно і не мав зайвих чи невалідних значень.