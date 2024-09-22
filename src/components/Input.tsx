import classes from "./Input.module.css";

interface InputProps {
  name: string,
  type: string,
  value: string,
  disabled: boolean
}

function Input({ name, type, value, disabled }: InputProps) {
  return (
    <div className={classes['input-container']}>
      <label className={classes.label}>{name} : </label><br/>
      <input className={classes.input} id={name} name={name} type={type} defaultValue={value} disabled = {disabled}/><br/>
    </div>
  );
}

export default Input;
