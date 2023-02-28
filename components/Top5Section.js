"use client";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Container,
  Text,
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Link,
  OrderedList,
} from "@chakra-ui/react";
import { top5Data } from "./top5data";
export default function Top5Section() {
  return (
    <Container maxW={"7xl"} backgroundColor={"#1D1D1D"}>
      <Box
        width={[
          "100%", // 0-30em
          "50%", // 30em-48em
          "25%", // 48em-62em
          "60%", // 62em+
        ]}
        marginBottom={"5rem"}
      >
        {/* <Heading as={"h2"} font-weight="bold" color={"white"}>
          Top 5
        </Heading> */}
        <OrderedList fontSize={"1.2rem"} color={"white"} marginTop={"1rem"}>
          {top5Data.map((el, index) => (
            <ListItem key={`top5-0${index}`}>
              <Link textDecoration={"underline"} href={`#${el.id}`}>
                {el.name}
              </Link>
              <Text as={"span"}>- {el.rating}</Text>
            </ListItem>
          ))}
        </OrderedList>
      </Box>
      <Box
        width={[
          "100%", // 0-30em
          "50%", // 30em-48em
          "25%", // 48em-62em
          "60%", // 62em+
        ]}
      >
        {top5Data.map((el) => (
          <Box>
            <Heading color="white" as={"h3"} id={el.id}>
              {el.name}- {el.rating}
            </Heading>
            <Text color={"#ffffffb3"} fontWeight={"bold"} marginTop={"1rem"}>
              What is {el.name}?
            </Text>
            <Text color={"white"} marginTop={"1rem"}>
              <Link color={"#D1ED82"} href={el.link} isExternal>
                {el.name} <ExternalLinkIcon />{" "}
              </Link>
              - {el.linkPara}
            </Text>
            {el.paras.map((para, index) => (
              <Text
                key={`${el.name}-para-0${index}`}
                color={"white"}
                marginTop={"1rem"}
              >
                {para}
              </Text>
            ))}
            <Box marginTop={"1rem"}>
              <Text
                as={"span"}
                color={"#ffffffb3"}
                marginTop={"1rem"}
                fontWeight={"bold"}
              >
                Minimum investment:{" "}
              </Text>
              <Text as="span" fontStyle={"normal"} color={"white"}>
                {el.minInv}
              </Text>
            </Box>
            <Box marginTop={"1rem"}>
              <Text
                as={"span"}
                color={"#ffffffb3"}
                marginTop={"1rem"}
                fontWeight={"bold"}
              >
                Asset classes:{" "}
              </Text>
              <Text as="span" fontStyle={"normal"} color={"white"}>
                {el.asstClass}
              </Text>
            </Box>
            <Box marginTop={"1rem"}>
              <Text color={"#ffffffb3"} fontWeight={"bold"}>
                Pros:
              </Text>
              <UnorderedList paddingLeft={"2rem"}>
                {el.pros.map((pro, index) => (
                  <ListItem
                    key={`${el.name}-pro-0${index}`}
                    color={"white"}
                    marginTop={"1rem"}
                  >
                    {pro}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
            <Box marginTop={"1rem"} marginBottom={"5rem"}>
              <Text color={"#ffffffb3"} fontWeight={"bold"}>
                Cons:
              </Text>
              <UnorderedList paddingLeft={"2rem"}>
                {el.cons.map((con, index) => (
                  <ListItem
                    key={`${el.name}-con-0${index}`}
                    color={"white"}
                    marginTop={"1rem"}
                  >
                    {con}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
