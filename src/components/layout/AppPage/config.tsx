import { MdLogout } from "react-icons/md";

type Logout = (params: { logoutParams: { returnTo: string } }) => void;

interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
}

export const handlelogout = (logout: Logout): Action[] => {
  return [
    {
      id: "logout",
      label: "Cerrar sesión",
      icon: <MdLogout />,
      action: () =>
        logout({ logoutParams: { returnTo: window.location.origin } }),
    },
  ];
};
