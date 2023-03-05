import { useAppContext } from "../contexts/app-context";

const NavbarUserAvatar = () => {
  const [state] = useAppContext();

  return <img src={state?.user?.avatar} alt="avata" width={50} />;
};

export default NavbarUserAvatar;
