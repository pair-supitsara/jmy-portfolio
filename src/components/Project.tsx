import classes from "./Project.module.css";

interface MyProjectProps {
  name: string,
  description: string[],
  technologies: string,
  image: string,
  alt: string,
  github: string
}

function openUrl(url : string): void {
  window.open(url, "_blank")
}

function Project({ name, description, technologies, image, alt="alt is not defined", github }: MyProjectProps) {
  return (
    <div className={classes['project-card']}>
        <img className={classes['image']} alt={alt} src={image}></img>
        <div className={classes['top']}>
          <h5>{ name }</h5>
          <button className={classes['git-button']} onClick={() => { openUrl(github) }}>{'Github'}</button>
        </div>
        <div className={classes['bottom']}>
          description: <ul className="lists">{ description.map((list) => <li key={list}>{ list }</li>) }</ul>
          <p>technologies: { technologies }</p>
        </div>

    </div>
  );
}

export default Project;
