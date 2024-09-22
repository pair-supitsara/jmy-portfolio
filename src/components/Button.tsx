import classes from "./Button.module.css";

interface ButtonProps {
  text: string,
  type: "submit" | "button"
}

function Button({ text, type }: ButtonProps) {
  return (
    <button className={classes.button} type={type}>{ text }</button>
  );
}

export default Button;
