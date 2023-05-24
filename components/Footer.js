import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import NextLink from "next/link";

const Logo = (props) => {
  return (
    <Link as={NextLink} href="/">
      <Image
        alt={"BIL Logo"}
        fit={"cover"}
        align={"center"}
        w={"75%"}
        h={"100%"}
        src={"./bil.png"}
      />
    </Link>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bg={"#06051D"} color={"#FFFFFF"}>
      <Box
      // borderTopWidth={1}
      // borderStyle={"solid"}
      // borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"7xl"}
          py={20}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text width={"65%"} color={"#b3b3b3"} fontSize={"0.8rem"}>
            This website is operated and managed by{" "}
            <Link href="https://www.hedonova.io/">Hedonova LLC</Link>, a company
            duly organized and existing under the laws of the State of Delaware.
            For any inquiries or concerns regarding the operation or content of
            this website, you may contact Hedonova LLC directly at{" "}
            <Link href="https://hello@hedonovaagri.com" target="_blank">
              hello@hedonovaagri.com
            </Link>{" "}
            The information provided on this website is for general
            informational purposes only. We strive to maintain accuracy but make
            no representations or warranties about the completeness, accuracy,
            reliability, suitability, or availability of the website's content.
            Reliance on such information is at your own risk. The use of
            third-party names, trademarks, logos, or proprietary designations is
            purely for informational purposes and does not imply endorsement or
            affiliation. All trademarks, registered trademarks, and logos belong
            to their respective owners. We have no control over third-party
            websites and disclaim liability for any damages incurred. We make no
            warranties regarding website functionality or uninterrupted access.
            Seek professional legal advice for your specific circumstances and
            jurisdiction.
          </Text>
          {/* <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack> */}
        </Container>
      </Box>
    </Box>
  );
}
