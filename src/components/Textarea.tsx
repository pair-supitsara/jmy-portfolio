import classes from "./Textarea.module.css";

interface TextareaProps {
    name: string
}

function Textarea({ name }: TextareaProps) {
  return (
    <div className={classes['input-container']}>
      <label className={classes.label}>{name} : </label>
      <textarea className={classes.textarea} name="myInput" /><br/>
    </div>
  );
}

export default Textarea;
