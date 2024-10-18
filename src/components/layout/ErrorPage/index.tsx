import { MdChevronLeft } from "react-icons/md";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Button } from "@inubekit/button";
import { useMediaQueries } from "@inubekit/hooks";

import selsaLogo from "@assets/images/selsa.png"; // Ensure this import path is correct
import errorImage from "@assets/images/timeout.png"; // Ensure this import path is correct

import { StyledCompanyLogo, StyledErrorImage } from "./styles";
import { errorPageConfig } from "./config";

interface ErrorPageProps {
  logo?: string;
  logoAlt?: string;
  heading?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

function ErrorPage(props: ErrorPageProps) {
  const {
    logo = selsaLogo,
    logoAlt = errorPageConfig.logoAlt,
    heading = errorPageConfig.heading,
    description = errorPageConfig.description,
    image = errorImage,
    imageAlt = errorPageConfig.imageAlt,
  } = props;

  const mediaQueries = ["(max-width: 1000px)", "(max-width: 600px)"];
  const matches = useMediaQueries(mediaQueries);

  return (
    <Stack
      margin={matches["(max-width: 600px)"] ? "40px" : "100px 100px 0px"}
      gap={matches["(max-width: 1000px)"] ? "64px" : "120px"}
      direction="column"
    >
      <StyledCompanyLogo src={logo} alt={logoAlt} />
      <Grid
        templateRows={matches["(max-width: 600px)"] ? "repeat(2, 1fr)" : "1fr"}
        templateColumns={
          matches["(max-width: 600px)"] ? "auto" : "repeat(2, 1fr)"
        }
        alignItems="center"
        gap={matches["(max-width: 600px)"] ? "64px" : "120px"}
      >
        <Stack gap="24px" direction="column">
          <Stack gap="16px" direction="column">
            <Text type="title">{heading}</Text>
            <Text type="title" size="medium">
              {description}
            </Text>
          </Stack>
          <Button
            iconBefore={<MdChevronLeft size={18} />}
            type="link"
            path="/home"
          >
            Salir
          </Button>
        </Stack>
        <StyledErrorImage src={image} alt={imageAlt} />
      </Grid>
    </Stack>
  );
}

export { ErrorPage };
export type { ErrorPageProps };
