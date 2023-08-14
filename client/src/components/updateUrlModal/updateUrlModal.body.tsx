import { OnInputChange } from "../index";

const UpdateUrlModalBody = ({
  field,
  value,
  onChange,
}: {
  field: string;
  value: string;
  onChange: (e: OnInputChange) => void;
}) => {
  return (
    <div className="body">
      <input
        name={field}
        type="text"
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
};

export default UpdateUrlModalBody;
