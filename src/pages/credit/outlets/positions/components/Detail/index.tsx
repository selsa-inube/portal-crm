import { Icon } from "@inubekit/icon";
import { Stack } from "@inubekit/stack";

import { icons } from "./config";

export function Details() {
  return (
    <Stack justifyContent="space-between">
      {icons.map((item, index) => (
        <Icon
          key={index}
          icon={item.icon}
          size="16px"
          cursorHover
          appearance={item.appearance}
        />
      ))}
    </Stack>
  );
}
