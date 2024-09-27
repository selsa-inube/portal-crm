import { StoryFn } from "@storybook/react";
import {
  MdInventory2,
  MdOutlineAddTask,
  MdOutlineExplore,
  MdOutlinePendingActions,
  MdOutlinePhonelinkSetup,
  MdOutlineSecurity,
  MdPerson,
} from "react-icons/md";
import { BrowserRouter } from "react-router-dom";

import { AppMenuGrid } from "@components/layout/AppMenuGrid";

import { AppMenu, AppMenuProps } from "./index";

const story = {
  components: [AppMenu],
  title: "layouts/AppMenu",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Prospects = (args: AppMenuProps) => (
  <AppMenu {...args}>
    <AppMenuGrid appOptions={Prospects.args.appOptions} />
  </AppMenu>
);
Prospects.args = {
  appName: "Privilegios",
  appDescription: "Modifica las propiedades y permisos de tu cuenta",
  navigatePage: "/",
  appRoute: [
    {
      path: "/",
      label: "Inicio",
      id: "/",
      isActive: false,
    },
    {
      path: "/users",
      label: "Usuarios",
      id: "/users",
      isActive: false,
    },
  ],
  appOptions: [
    {
      id: 1,
      icon: <MdPerson />,
      label: "Usuarios",
      description: "invitar, editar, activar y eliminar usuarios de Linix",
      url: "prospects/users",
      domain: "prospects",
    },
    {
      id: 2,
      icon: <MdOutlineExplore />,
      label: "Roles",
      description: "Crear, editar, activar y eliminar roles de Linix",
      url: "prospects/roles",
      domain: "prospects",
    },
    {
      id: 3,
      icon: <MdOutlineAddTask />,
      label: "Administración contenido",
      description: "Administrar el contenido de Linix",
      url: "prospects/ContentAdministration",
      domain: "prospects",
    },
    {
      id: 4,
      icon: <MdOutlineSecurity />,
      label: "Seguridad",
      description: "Administrar la configuración de seguridad de Linix",
      url: "prospects/Security",
      domain: "prospects",
    },
    {
      id: 5,
      icon: <MdOutlinePhonelinkSetup />,
      label: "Dispositivos",
      description: "dispositivos vinculados",
      url: "prospects/devices",
      domain: "prospects",
    },
    {
      id: 6,
      icon: <MdOutlinePendingActions />,
      label: "Administración versiones",
      description: "Administrar versiones de Linix",
      url: "prospects/users",
      domain: "prospects",
    },
    {
      id: 7,
      icon: <MdInventory2 />,
      label: "Gestion productos",
      description: "Gestionar productos Linix",
      url: "prospects/users",
      domain: "prospects",
    },
  ],
};

export default story;

export { Prospects };
