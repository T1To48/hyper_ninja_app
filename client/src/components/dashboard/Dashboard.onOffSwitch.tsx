import "../../styles/dashboard/on_off_switch.css";
const OnOffSwitch = ({
  checked,
  toggleUrl,
}: {
  checked: boolean;
  toggleUrl: () => Promise<void>;
}) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        void toggleUrl();
      }}
      className="on-off-switch"
    >
      <input type="checkbox" checked={checked} readOnly />
      <label>
        <i></i>
      </label>
    </div>
  );
};

export default OnOffSwitch;
