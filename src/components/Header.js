import classes from "./Header.module.css";

function Header(props) {
  return (
    <header className={classes.header}>
      <div className={classes.div}>{props.value}</div>
    </header>
  );
}

export default Header;
