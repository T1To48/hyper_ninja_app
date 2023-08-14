import { IUserPassword, OnInputChange, SetState } from "../index";
const DeleteUserBody = ({
  password,
  setPassword,
}: {
  password: IUserPassword;
  setPassword: SetState<IUserPassword>;
}) => {
  const handleChange = (e: OnInputChange) => {
    const { value } = e.target;
    setPassword(value);
  };
  return (
    <div className="body">
      <label htmlFor="urlName">
        Type Your<b> Password</b>,
        <br />
        To Delete Your Account:
      </label>
      <input
        id="urlName"
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
        value={password}
        minLength={8}
        required
      />
    </div>
  );
};

export default DeleteUserBody;
