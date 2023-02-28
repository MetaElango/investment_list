"use client";
import { Container, Text, Box } from "@chakra-ui/react";

export default function AboutSection() {
  return (
    <Container maxW={"7xl"} backgroundColor={"#1D1D1D"}>
      <Box
        width={[
          "100%", // 0-30em
          "80%", // 30em-48em
          "70%", // 48em-62em
          "60%", // 62em+
        ]}
      >
        <Text as={"p"} color={"white"}>
          Best Investment List is a group of investment enthusiasts who are
          dedicated to studying the financial market and providing valuable
          insights to help investors make informed decisions. Our team is
          comprised of experienced professionals with a passion for finance, who
          have come together to share their knowledge and expertise with the
          world.
        </Text>
        <Text as={"p"} color={"white"} marginTop={"1rem"}>
          We believe that the key to successful investing lies in understanding
          the market, the opportunities it presents, and the risks it poses.
          That's why we have made it our mission to provide comprehensive
          information on investment platforms, so that our users can make
          informed decisions about where to invest their money.
        </Text>
        <Text as={"p"} color={"white"} marginTop={"1rem"}>
          Our team of experts use a thorough and rigorous rating system to
          evaluate investment platforms, taking into account a variety of
          factors such as performance, risk, assets under management, management
          experience and expertise, strategy and investment approach, and fees
          and expenses. By considering these factors, we aim to provide our
          users with a complete picture of each investment platform, and help
          them to make informed investment decisions.
        </Text>
        <Text as={"p"} color={"white"} marginTop={"1rem"}>
          At Best Investment List, we are dedicated to providing accurate,
          up-to-date information to our users, and we are constantly working to
          improve our services. We believe that with the right information,
          anyone can become a successful investor, and it is our goal to empower
          our users with the knowledge they need to make informed investment
          decisions.
        </Text>
        <Text as={"p"} color={"white"} marginTop={"1rem"} marginBottom={"5rem"}>
          Thank you for choosing Best Investment List, and we look forward to
          serving you in your journey towards financial success.
        </Text>
      </Box>
    </Container>
  );
}
