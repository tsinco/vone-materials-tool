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
      <button className="button" disabled={disabled} onClick={onClick}>
        {name}
      </button>
    );
  }
}
export default ActionButton;
