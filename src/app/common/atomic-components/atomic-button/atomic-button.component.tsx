import styles from "./atomic-button.module.css";

interface AtomicButtonComponentProps {
  name: string;
  clickFunction?: React.MouseEventHandler<HTMLDivElement>;
}

const AtomicButtonComponent = ({
  name,
  clickFunction,
}: AtomicButtonComponentProps) => {
  return (
    <div className={styles["container"]} onClick={clickFunction}>
      {name}
    </div>
  );
};

export default AtomicButtonComponent;
