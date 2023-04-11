import cx from 'classnames';
import {
  Button,
} from '../index';
import {
    BUTTON_SIZE as size,
    BUTTON_COLOR as buttonColor
} from '../Button/Button';
import styles from './Input.module.css';

export const Input = ({
  onKeyDown,
  ref,
  isErr,
  isLock,
  topText = "",
  placeholder = "Введите",
  value = "",
  inputType = "text",
  span,
  children = isLock ? (
    <Button
      color={buttonColor.blueText}
      size={size.small}
      iconColor={"black"}
      icon={"Locked"}
    />
  ) : (
    ""
  ),
  onChange,
}) => {
  const inputStyles = cx({
    [styles.inputForm]: true,
    [styles.inputFormError]: isErr,
    [styles.inputFormLock]: isLock,
  });
  return (
    <div className={styles.wrapper}>
      {topText ? <div>{topText}</div> : null}

      <div className={inputStyles}>
        <span>{span}</span>
        <input
          onKeyDown={onKeyDown}
          ref={ref}
          className={styles.inp}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={isLock}
        ></input>
        {children}
      </div>
    </div>
  );
};