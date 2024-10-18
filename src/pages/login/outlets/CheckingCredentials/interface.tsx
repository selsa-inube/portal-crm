import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Spinner } from "@inubekit/spinner";

function CheckingCredentialsUI() {
  return (
    <Stack gap="16px" direction="column">
      <Stack direction="column">
        <Text type="title" textAlign="center">
          Validando credenciales
        </Text>
        <Text type="title" size="small" textAlign="center">
          Espere un momento, por favor.
        </Text>
      </Stack>
      <Stack alignItems="center" direction="column">
        <Spinner size="large" appearance="primary" transparent={false} />
      </Stack>
    </Stack>
  );
}

export { CheckingCredentialsUI };
