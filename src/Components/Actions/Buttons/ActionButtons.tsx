import { PureComponent } from "react";
type Props = {
  name?: string;
  disabled?: boolean;
  onClick?: () => any;
};

class ActionButton extends PureComponent<Props> {
  static defaultProps = {
    text: "",
    disabled: false,
  };

  render() {
    const { disabled, onClick, name } = this.props;
    return (
      // <div className="ActionButtons">
      <button className="button" disabled={disabled} onClick={onClick}>
        {name}
      </button>
      // </div>
    );
  }
}
export default ActionButton;
