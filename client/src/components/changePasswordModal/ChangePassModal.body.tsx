import { ChangeEvent } from "react";
import { SetState } from "../index";
import { IChangePasswordReq } from "../../features/api.userEndpoints";
const ChangePassBody = ({
  passwords,
  setPasswords,
}: {
  passwords: IChangePasswordReq;
  setPasswords: SetState<IChangePasswordReq>;
}) => {
  const { password, newPassword } = passwords;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };
  return (
    <div className="body">
      <label htmlFor="urlName">
        To Change Passord,
        <br /> Type The<b> Current</b> Password First:
      </label>
      <input
        id="urlName"
        name="password"
        placeholder="Current"
        type="password"
        onChange={handleChange}
        value={password}
        minLength={8}
        required
      />
      <input
        id="urlName"
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
