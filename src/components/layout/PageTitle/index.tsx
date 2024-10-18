import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";
import { Icon } from "@inubekit/icon";
import { Text } from "@inubekit/text";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface PageTitleProps {
  title: string;
  description: string;
  icon?: JSX.Element;
  navigatePage?: string;
}

function PageTitle(props: PageTitleProps) {
  const { title, description, icon, navigatePage } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const navigate = useNavigate();

  return (
    <Stack gap="8px" direction="column">
      <Stack gap="8px" alignItems="center">
        {icon ? (
          <Icon appearance="dark" cursorHover={true} icon={icon} size="20px" />
        ) : (
          <Icon
            appearance="dark"
            cursorHover={true}
            icon={<MdArrowBack />}
            size="20px"
            onClick={() =>
              navigatePage ? navigate(navigatePage) : navigate(-1)
            }
          />
        )}
        <Text as="h1" type="title" size={smallScreen ? "medium" : "large"}>
          {title}
        </Text>
      </Stack>
      <Text appearance="gray" size={smallScreen ? "small" : "medium"}>
        {description}
      </Text>
    </Stack>
  );
}

export { PageTitle };
export type { PageTitleProps };
