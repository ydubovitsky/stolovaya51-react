import styles from "./tip.module.css";
import cn from "classnames";

export interface TipComponentProps {
  top?: string;
  left?: string;
  text?: string;
  display?: string;
}

const TipComponent: React.FC<TipComponentProps> = (styless): JSX.Element => {

  return (
    <div className={cn(styles["container"])} style={styless}>
      <p>{styless.text}</p>
    </div>
  );
};

export default TipComponent;
