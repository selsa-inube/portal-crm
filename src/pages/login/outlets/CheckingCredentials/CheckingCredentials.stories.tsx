import { BrowserRouter } from "react-router-dom";
import { CheckingCredentials } from ".";

const story = {
  components: [CheckingCredentials],
  title: "layouts/login/outlets/checking-credentials",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: React.ElementType) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    clients: {
      control: { type: "array" },
      description: "An array of client objects to check during login.",
    },
  },
};

const Default = () => <CheckingCredentials clients={[]} />;

export { Default };
export default story;
