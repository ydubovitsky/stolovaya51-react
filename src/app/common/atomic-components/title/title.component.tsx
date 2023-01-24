import styles from "./title.module.css";

type TitleComponentProps = {
  name: string;
  color?: string;
};

const TitleComponent = ({ name, color }: TitleComponentProps) => {
  return (
    <h1 className={styles["container"]} style={{ color: color }}>
      {name}
    </h1>
  );
};

export default TitleComponent;
