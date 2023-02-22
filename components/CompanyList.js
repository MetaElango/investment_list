"use client";

import {
  Container,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  SimpleGrid,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  AspectRatio,
  Image,
  Flex,
  IconButton,
  Link,
  Spinner,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  SearchIcon,
  StarIcon,
  createIcon,
} from "@chakra-ui/icons";
export const ReturnsIcon = createIcon({
  displayName: "ReturnsIcon",
  viewBox: "0 0 20 20",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path
      d="M2.40599 12.523L5.80799 9.121L8.63599 11.95L11.793 8.793L9.99999 7H15V12L13.207 10.207L8.63599 14.778L5.80799 11.95L3.33299 14.424C4.45641 16.1149 6.18062 17.3154 8.15623 17.7823C10.1318 18.2493 12.2111 17.9477 13.9726 16.9387C15.7341 15.9297 17.0462 14.2888 17.6429 12.3484C18.2396 10.4081 18.0764 8.31341 17.1862 6.48893C16.2961 4.66446 14.7456 3.24663 12.849 2.52274C10.9524 1.79886 8.85158 1.82307 6.97218 2.59047C5.09277 3.35787 3.57539 4.81106 2.72752 6.65556C1.87966 8.50006 1.76471 10.5979 2.40599 12.524V12.523ZM0.867993 14.081L0.857993 14.071L0.861993 14.067C0.291921 12.787 -0.00180296 11.4012 -7.07302e-06 10C-7.07302e-06 4.477 4.47699 0 9.99999 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 9.99999 20C5.92999 20 2.42999 17.57 0.867993 14.081Z"
      fill="white"
    />
  ),
});
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function CompanyList() {
  const { data, error } = useSWR(
    "https://opensheet.elk.sh/10nLZz7OlrF3iV_whdC8feNTC0CENjKDd3FbNDiOVhzE/1",
    fetcher
  );

  if (error)
    return (
      <Container maxW={"7xl"} backgroundColor={"#343434"}>
        Failed to load
      </Container>
    );
  if (!data)
    return (
      <Container maxW={"7xl"} backgroundColor={"#343434"}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Spinner color="white" size={"xl"} />
        </Flex>
      </Container>
    );
  const modifiedData = data.map((el) => {
    const classes = el.CLASS.split(",");
    if (classes.length > 1) {
      el.showClass = "Multi asset";
    } else {
      el.showClass = classes[0];
    }
    return el;
  });
  return (
    <Container maxW={"7xl"} backgroundColor={"#343434"}>
      <Stack spacing={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="white" />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="Search by company name, asset classes"
            color={"white"}
            // _placeholder={{ color: "inherit" }}
          />
        </InputGroup>
      </Stack>
      <SimpleGrid
        spacing={8}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        py={"10"}
      >
        {modifiedData.map((el, index) => (
          <Card key={index} backgroundColor={"#222222"}>
            <CardHeader>
              {/* <AspectRatio maxW="80px" ratio={4 / 3}> */}
              <Flex justifyContent={"space-between"}>
                <Box backgroundColor={"white"} borderRadius={"md"} p={"1"}>
                  <Image
                    src={el["LOGO LINK"]}
                    alt="naruto"
                    objectFit="cover"
                    width={"50px"}
                  />
                </Box>
                <Box>
                  <Link
                    href={el.WEBSITE}
                    isExternal
                    backgroundColor={"#ffffff1a"}
                    p="1"
                    borderRadius={"md"}
                    _hover={{
                      backgroundColor: "#D1ED82",
                    }}
                  >
                    <ArrowForwardIcon
                      transform={"rotate(320deg)"}
                      color={"white"}
                      width={"19px"}
                      height={"20px"}
                      _hover={{
                        color: "black",
                      }}
                    />
                  </Link>
                </Box>
              </Flex>

              {/* </AspectRatio> */}
            </CardHeader>
            <CardBody>
              <Heading py={"1"} size="lg" color={"white"}>
                {el["COMPANY NAME"]}
              </Heading>
              <Text py={"1"} color={"#ffffffb3"}>
                {el["DESCRIPTION"]}
              </Text>
              <Box
                borderTop={"1px solid #ffffff1a"}
                borderBottom={"1px solid #ffffff1a"}
                my={"3"}
                py={"3"}
              >
                <Heading py={"1"} size="sm" color={"#ffffffb3"}>
                  Minimum investment:
                  <Text as={"span"} color={"#D1ED82"}>
                    &nbsp; {el["MINIMUM INVESTMENT"]}
                  </Text>
                </Heading>
              </Box>
            </CardBody>
            <CardFooter>
              <Box
                color={"white"}
                p={"2"}
                borderRadius={"md"}
                border={"1px solid #ffffff1a"}
              >
                <Flex>
                  <Text>{el.showClass}</Text>
                </Flex>
              </Box>
              <Box
                color={"white"}
                p={"2"}
                borderRadius={"md"}
                border={"1px solid #ffffff1a"}
                mx={"3"}
              >
                <Flex alignItems={"center"}>
                  <StarIcon />
                  <Text marginLeft={"2"}>{el.RATINGS}</Text>
                </Flex>
              </Box>
              <Box
                color={"white"}
                p={"2"}
                borderRadius={"md"}
                border={"1px solid #ffffff1a"}
              >
                <Flex alignItems={"center"}>
                  <ReturnsIcon />
                  <Text marginLeft={"2"}>
                    Returns{" "}
                    <Text color={"#D1ED82"} as={"span"}>
                      105%
                    </Text>
                  </Text>
                </Flex>
              </Box>
            </CardFooter>
          </Card>
        ))}
        <Card backgroundColor={"#222222"}>
          <CardHeader>
            {/* <AspectRatio maxW="80px" ratio={4 / 3}> */}
            <Flex justifyContent={"space-between"}>
              <Box backgroundColor={"white"} borderRadius={"md"} p={"1"}>
                <Image
                  src="https://files.pixpa.com/117214/1676278410205-3664.png"
                  alt="naruto"
                  objectFit="cover"
                  width={"50px"}
                />
              </Box>
              <Box>
                <Link
                  href="https://hedonova.io"
                  isExternal
                  backgroundColor={"#ffffff1a"}
                  p="1"
                  borderRadius={"md"}
                  _hover={{
                    backgroundColor: "#D1ED82",
                  }}
                >
                  <ArrowForwardIcon
                    transform={"rotate(320deg)"}
                    color={"white"}
                    width={"19px"}
                    height={"20px"}
                    _hover={{
                      color: "black",
                    }}
                  />
                </Link>
              </Box>
            </Flex>

            {/* </AspectRatio> */}
          </CardHeader>
          <CardBody>
            <Heading py={"1"} size="lg" color={"white"}>
              Hedonova
            </Heading>
            <Text py={"1"} color={"#ffffffb3"}>
              Hedonova is an open-access hedge fund that invests in a wide range
              of alternative assets, including startups, NFTs, real estate in
              emerging markets, art, and more. With investors from 18 countries,
              the company offers a unique opportunity for individuals to access
              the benefits of alternative asset investments.{" "}
            </Text>
            <Box
              borderTop={"1px solid #ffffff1a"}
              borderBottom={"1px solid #ffffff1a"}
              my={"3"}
              py={"3"}
            >
              <Heading py={"1"} size="sm" color={"#ffffffb3"}>
                Minimum investment:
                <Text as={"span"} color={"#D1ED82"}>
                  &nbsp; $10,000
                </Text>
              </Heading>
            </Box>
          </CardBody>
          <CardFooter>
            <Box
              color={"white"}
              p={"2"}
              borderRadius={"md"}
              border={"1px solid #ffffff1a"}
            >
              <Flex>
                <Text>Multiasset</Text>
              </Flex>
            </Box>
            <Box
              color={"white"}
              p={"2"}
              borderRadius={"md"}
              border={"1px solid #ffffff1a"}
              mx={"3"}
            >
              <Flex alignItems={"center"}>
                <StarIcon />
                <Text marginLeft={"2"}>4.8</Text>
              </Flex>
            </Box>
            <Box
              color={"white"}
              p={"2"}
              borderRadius={"md"}
              border={"1px solid #ffffff1a"}
            >
              <Flex alignItems={"center"}>
                <ReturnsIcon />
                <Text marginLeft={"2"}>
                  Returns{" "}
                  <Text color={"#D1ED82"} as={"span"}>
                    105%
                  </Text>
                </Text>
              </Flex>
            </Box>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Container>
  );
}
