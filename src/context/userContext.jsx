import { createContext, useState } from "react";

export const userDetail = createContext(null);

const UserDetailProvider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [number, setNumber] = useState("");

  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    number,
    setNumber,
  };

  return (
    <userDetail.Provider value={contextValue}>
      {props.children}
    </userDetail.Provider>
  );
};

export default UserDetailProvider;
