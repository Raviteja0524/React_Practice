import React, { createContext, useState } from "react";

interface Personaldetails {
  name: string;
  surname: string;
  age: number;
  email: string;
  phone: string;
  address: string;
  school: string;
  schoolLocation: string;
  college: string;
  collegeLocation: string;
  degree: string;
  degreeLocation: string;
}

interface UserContextType {
  personalDetails: Personaldetails[];
  setPersonalDetails: React.Dispatch<React.SetStateAction<Personaldetails[]>>;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContextProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [personalDetails, setPersonalDetails] = useState<Personaldetails[]>([]);
  return (
    <UserContext.Provider value={{ personalDetails, setPersonalDetails }}>
      {children}
    </UserContext.Provider>
  );
};