import { classExpression } from "@babel/types";
import { Card } from "antd";
import classes from "./InfoCard.module.css";

function InfoCard(props) {
  const title = props.title;
  const children = props.children;

  return (
    <div className={classes.infoCard}>
      <Card title={title}>{children}</Card>
    </div>
  );
}

export default InfoCard;
