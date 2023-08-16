import { IChangePasswordReq, OnInputChange, SetState } from "../index";
const ChangePassBody = ({
  passwords,
  setPasswords,
}: {
  passwords: IChangePasswordReq;
  setPasswords: SetState<IChangePasswordReq>;
}) => {
  const { password, newPassword } = passwords;
  const handleChange = (e: OnInputChange) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };
  return (
    <div className="body">
      <label >
        To Change Passord,
        <br /> Type The<b> Current</b> Password First:
      </label>
      <input
        name="password"
        placeholder="Current"
        type="password"
        onChange={handleChange}
        value={password}
        minLength={8}
        required
      />
      <input
        name="newPassword"
        placeholder="New"
        type="password"
        onChange={handleChange}
        value={newPassword}
        minLength={8}
        required
      />
    </div>
  );
};

export default ChangePassBody;
