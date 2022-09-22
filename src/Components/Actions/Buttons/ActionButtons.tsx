import { PureComponent } from "react";
type Props = {
  name?: string;
  hidden?: boolean;

  onClick?: () => any;
};

class ActionButton extends PureComponent<Props> {
  static defaultProps = {
    text: "",
    hidden: false,
  };

  render() {
    const { hidden, onClick, name } = this.props;
    return (
      // <div className="ActionButtons">
      <button className="button" hidden={hidden} onClick={onClick}>
        {name}
      </button>
      // </div>
    );
  }
}
export default ActionButton;
