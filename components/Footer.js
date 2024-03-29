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
            This website is operated and managed by Axba Holdings Limited, a
            company duly organized and existing under the laws of the State of
            British Virgin Islands. For any inquiries or concerns regarding the
            operation or content of this website, you may contact Axba Holdings
            Limited directly at info@bestinvestmentlist.com or via phone at +1
            812-613-4812. The information provided on this website is for
            general informational purposes only. We strive to maintain accuracy
            but make no representations or warranties about the completeness,
            accuracy, reliability, suitability, or availability of the website's
            content. Reliance on such information is strictly at your own risk.
            The use of third-party names, trademarks, logos, or proprietary
            designations on our website is purely for informational and
            identification purposes and does not imply endorsement or
            affiliation. All trademarks, registered trademarks, and logos belong
            to their respective owners. We have no control over the content of
            third-party websites and disclaim all liability for any damages that
            may arise from accessing or relying on them. Additionally, we do not
            warrant the functionality of this website or guarantee uninterrupted
            access. For guidance pertaining to your specific circumstances, we
            recommend seeking professional legal advice appropriate for your
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
