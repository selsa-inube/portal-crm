import { Meta } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";

import selsaLogo from "@assets/images/selsa.png";
import errorImage from "@assets/images/timeout.png";

import { ErrorPage, ErrorPageProps } from "./index";

const meta: Meta<typeof ErrorPage> = {
  title: "components/layouts/Error",
  component: ErrorPage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = (args: ErrorPageProps) => <ErrorPage {...args} />;

Default.args = {
  logo: selsaLogo,
  logoAlt: "Sistemas Enlinea",
  heading: "!Oh! Algo ha salido mal",
  description:
    "El servicio no se encuentra disponible en el momento. Por favor intenta de nuevo más tarde.",
  image: errorImage,
  imageAlt: "Ha surgido un error. Revisa la descripción",
};

export default meta;
