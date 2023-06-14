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
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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

const joinString = (htmlString, link) => {
  return htmlString
    .replace("<p>", `<p style="display: inline">`)
    .replace(
      "\n",
      `<a href="/blogs/${link}" style="display: inline; color: #D1ED82">...read more</a>`
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
            templateColumns={{
              base: "repeat(auto-fill, minmax(300px, 1fr))",
              sm: "repeat(auto-fill, minmax(250px, 450px))",
              md: "repeat(auto-fill, minmax(300px, 1fr))",
              lg: "repeat(auto-fill, minmax(300px, 1fr))",
              xl: "repeat(auto-fill, minmax(300px, 1fr))",
              "2xl": "repeat(auto-fill, minmax(300px, 1fr))",
            }}
            py={"10"}
          >
            {blogs.map((el) => (
              // <Link as={NextLink} href={`blogs/${el.id}`}>
              <Card backgroundColor={"#1F1D44"}>
                <CardHeader>
                  <Flex flexDirection="column">
                    <Image
                      color={"#bbb"}
                      border={"1px solid #1F1D44"}
                      src={el.jetpack_featured_media_url}
                      alt={el.title.rendered}
                      borderRadius={"md"}
                      w={{
                        base: "400px",
                        // sm: "400px",
                        // md: "",
                        // lg: "",
                        // xl: "",
                        // "2xl": "",
                      }}
                      h={{
                        base: "230px",
                        // sm: "300px",
                        // md: "",
                        // lg: "",
                        // xl: "",
                        // "2xl": "",
                      }}
                      objectFit="cover"
                    />
                    <Heading
                      color={"white"}
                      fontSize={{ sm: "xl", base: "2xl" }}
                      fontFamily={"body"}
                      marginTop={"2rem"}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: el.title.rendered,
                        }}
                      ></div>
                    </Heading>
                  </Flex>
                </CardHeader>
                <CardBody>
                  {/* <Text color={"rgba(255, 255, 255, 0.7)"} minHeight={"100px"}>
                    {el.excerpt.rendered.replace(/<\/?p>/gi, "")}
                  </Text> */}
                  <div
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      display: "inline-block",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: joinString(el.excerpt.rendered, el.slug),
                    }}
                  ></div>
                </CardBody>
                <CardFooter>
                  <Text color={"rgba(255, 255, 255, 0.7)"}>
                    {convertBlogDate(el.date)}{" "}
                  </Text>
                </CardFooter>
              </Card>
              // </Link>
            ))}
          </SimpleGrid>
        </Container>
      )}
    </>
  );
};

export default Blogs;
