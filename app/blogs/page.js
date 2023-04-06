"use client";

import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";
// import { Container } from "@chakra-ui/react";
const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack
      marginTop="2"
      spacing="2"
      display="flex"
      alignItems="center"
      color="#ffffffb3"
    >
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://hedonovaagri.com/wp-json/wp/v2/posts", {
      headers: {
        "Content-Type": "application/json",
        // "X-AUTH-TOKEN": "1903516d1dcbad06c75ff653443c1c36",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <>
      {" "}
      <Hero firstLine="Our Latest" secondLine="Blogs" thirdLine={null} />
      <Container maxW={"7xl"} p="12">
        {blogs.map((el) => (
          <Box
            key={el.id}
            marginTop={{ base: "1", sm: "5" }}
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="space-between"
            backgroundColor={"#1f1d44"}
            padding={"20px 10px"}
            borderRadius="lg"
          >
            <Box
              display="flex"
              flex="1"
              marginRight="3"
              position="relative"
              alignItems="baseline"
            >
              <Box
                width={{ base: "100%", sm: "85%" }}
                zIndex="2"
                marginLeft={{ base: "0", sm: "5%" }}
                marginTop="5%"
              >
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    borderRadius="lg"
                    src={
                      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                    }
                    alt="some good alt text"
                    objectFit="contain"
                  />
                </Link>
              </Box>
              {/* <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(orange.600 1px, transparent 1px)",
                  "radial(orange.300 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box> */}
            </Box>
            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: "3", sm: "0" }}
            >
              <BlogTags tags={["Engineering", "Product"]} />
              <Heading marginTop="1" color={"#ffffff"}>
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  {el.title.rendered}
                </Link>
              </Heading>
              <Text as="p" marginTop="2" color="#ffffffb3" fontSize="lg">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
              <BlogAuthor name="Elango" date={new Date(el.date)} />
            </Box>
          </Box>
        ))}
      </Container>
    </>
  );
};

export default Blogs;
