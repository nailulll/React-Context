import React from "react";
import { useAppContext } from "../contexts/app-context";

const NavbarUserText = () => {
  const [state] = useAppContext();
  return <span>Hi {state?.user?.name}</span>;
};

export default NavbarUserText;
