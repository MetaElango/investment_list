"use client";

import {
  Box,
  Heading,
  Flex,
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
  SimpleGrid,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Hero from "@/components/Hero";
import { useEffect, useState } from "react";

const convertBlogDate = (blogDate) => {
  // parse the given timestamp string into a Date object
  const timestamp = new Date(blogDate);
  const currentTimestampMs = Date.UTC(
    new Date().getUTCFullYear(),
    new Date().getUTCMonth(),
    new Date().getUTCDate(),
    new Date().getUTCHours(),
    new Date().getUTCMinutes(),
    new Date().getUTCSeconds(),
    new Date().getUTCMilliseconds()
  );

  // calculate the time difference between the timestamp and the current time
  const timeDiffMs = currentTimestampMs - timestamp;

  // convert the time difference to hours
  const hoursDiff = Math.round(timeDiffMs / (1000 * 60 * 60));

  // format the output
  let output;
  if (hoursDiff < 1) {
    output = "just now";
  } else if (hoursDiff < 24) {
    output = `${hoursDiff} hour${hoursDiff === 1 ? "" : "s"} ago`;
  } else if (hoursDiff < 24 * 30) {
    const daysDiff = Math.round(hoursDiff / 24);
    output = `${daysDiff} day${daysDiff === 1 ? "" : "s"} ago`;
  } else if (hoursDiff < 24 * 30 * 12) {
    const monthsDiff = Math.round(hoursDiff / (24 * 30));
    output = `${monthsDiff} month${monthsDiff === 1 ? "" : "s"} ago`;
  } else {
    const yearsDiff = Math.round(hoursDiff / (24 * 30 * 12));
    output = `${yearsDiff} year${yearsDiff === 1 ? "" : "s"} ago`;
  }

  return output; // prints "1 year ago" (assuming the current date is April 11, 2023)
};
const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

// import { Container } from "@chakra-ui/react";
const BlogTags = (props) => {
  return (
    <HStack
      spacing={2}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
    >
      {/* {props.tags.map((tag) => {
        return (
          <Tag
            size={"md"}
            variant="solid"
            key={tag}
            backgroundColor={"rgba(255, 255, 255, 0.1)"}
          >
            {tag}
          </Tag>
        );
      })} */}
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
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hedonovaagri.com/wp-json/wp/v2/posts?per_page=100", {
      headers: {
        "Content-Type": "application/json",
        // "X-AUTH-TOKEN": "1903516d1dcbad06c75ff653443c1c36",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // setLoading(false);

        setBlogs(data);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Hero firstLine="Our Latest" secondLine="Blogs" thirdLine={null} />
      {isLoading ? (
        <Container maxW={"7xl"} backgroundColor={"#070533"} minH={"100vh"}>
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Spinner color="white" size={"xl"} />
          </Flex>
        </Container>
      ) : (
        <Container maxW={"7xl"} backgroundColor={"#070533"} minH={"100vh"}>
          <SimpleGrid
            spacing={8}
            templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
            py={"10"}
          >
            {blogs.map((el) => (
              <Link as={NextLink} href={`blogs/${el.id}`}>
                <Box
                  maxW={"445px"}
                  w={"full"}
                  bg={"#070533"}
                  boxShadow={"2xl"}
                  rounded={"md"}
                  p={6}
                  overflow={"hidden"}
                  border={"1px solid #2E2C60"}
                  borderRadius={"3xl"}
                >
                  <Image
                    src={el.jetpack_featured_media_url || "./stock.jpeg"}
                    layout={"fill"}
                    borderRadius={"xl"}
                    mb={"1rem"}
                    boxSize="22rem"
                    objectFit="cover"
                  />
                  <Stack>
                    {/* <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                Blog
              </Text> */}
                    <BlogTags
                      tags={["Research"]}
                      marginTop={"1rem"}
                      marginBottom={"1rem"}
                    />
                    <Heading
                      color={"white"}
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      marginTop={"2rem"}
                    >
                      {el.title.rendered}
                    </Heading>
                    <Text
                      color={"rgba(255, 255, 255, 0.7)"}
                      minHeight={"100px"}
                    >
                      {el.excerpt.rendered.replace(/<\/?p>/gi, "")}
                    </Text>
                  </Stack>
                  <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                    {/* <Avatar
                src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
                alt={"Author"}
              /> */}
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      {/* <Text fontWeight={600}>Achim Rolle</Text> */}
                      <Text color={"rgba(255, 255, 255, 0.7)"}>
                        {convertBlogDate(el.date)}{" "}
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Container>
      )}
    </>
  );
};

export default Blogs;
