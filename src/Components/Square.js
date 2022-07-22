const Square = (props) => {
  return (
    <span
      className={props.className}
      rowindex={props.rowIndex}
      onClick={props.onClick}
    >
      {props.state}
    </span>
  );
};
export default Square;
