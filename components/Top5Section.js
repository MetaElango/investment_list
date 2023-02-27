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
const top5Data = [
  {
    name: "Hedonova",
    rating: "4.8",
    link: "https://www.hedonova.io/",
    linkPara: `A visionary hedge fund that brings a new era of investing to the
    forefront. Founded in 2020 by Alexander Cavendish, CEO, and Suman
    Bannerjee, CIO, Hedonova comprises a team of 16 seasoned
    professionals including investors, lawyers, economists,
    researchers, engineers, and marketers.`,
    paras: [
      `Hedonova's securities are SEC qualified, ensuring the highest
    level of security and protection for investor funds. With a
    globally diversified portfolio offering access to over 10
    alternative assets, including works of art, high-yield real
    estate, cutting-edge startups, cryptos, NFTs, Web3, the
    agricultural economy, top university students, equipment
    financing, media royalties, wine and more, Hedonova provides
    investors with a new level of freedom and access to investment
    opportunities not limited by political borders and national
    policies.`,
      `In the past, such investment options were only available to
    high-net-worth individuals. However, Hedonova is open to everyone,
    with smaller entry points to allow anyone who meets minimum
    requirements access to these alternative investment opportunities.
    Registered as a Delaware LLC 506(b) exempted company, Hedonova
    offers a 100% tax pass-through, with investors paying taxes
    according to local laws. The fund also provides professional
    support for investors with regard to taxation, compliance, and
    other related services.`,
    ],
    pros: [
      `Barrier-free entry into alternative investments: Hedonova offers a simple and straightforward way for individuals to make alternative investments, regardless of prior expertise.`,

      `Low investment threshold: The low minimum investment requirement of $5,000 makes Hedonova accessible to a wide range of investors, both inside and outside of the U.S.`,

      `Flexible investment options:  With no hold period, investors have the freedom to enter and exit the fund as they please, giving them greater control over their investments.`,

      `Diversified portfolio: Hedonova provides access to a range of alternative assets through a single, globally diversified fund, giving investors the opportunity to diversify their investment portfolio and potentially increase returns.`,

      `IRA and 401(k) investment options: Hedonova offers the ability for individuals to invest via their IRA or 401(k), allowing them to take advantage of the benefits of these investment vehicles while also accessing alternative assets.`,

      `Open to all levels of investors: Hedonova is open to all investor levels, providing a level playing field for everyone to access alternative investment opportunities.`,
    ],
    cons: [
      `Limited investment options: As a mutual fund, Hedonova only offers a single investment option, limiting the flexibility and choice available to investors.`,

      `Lack of a proven track record: Being a relatively new company, Hedonova has a limited track record and it is too early to determine its long-term potential, making it a riskier investment choice for some investors.`,

      `No individual control over asset allocation: Investors do not have the option to select the alternative asset allocation themselves, with the fund manager making all asset allocation decisions based on global market conditions and risk factors. This lack of control over investment strategy may be a disadvantage for some investors.`,
    ],
    minInv: `$ 5,000`,
    asstClass: `Multi Asset class (10+ alternative assets)`,
  },
];

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
          <ListItem>
            <Link textDecoration={"underline"} href="#first">
              Hedonova
            </Link>
            <Text as={"span"}>- 4.8</Text>
          </ListItem>
          <ListItem>
            <Link textDecoration={"underline"} href="#second">
              Cadre
            </Link>
            <Text as={"span"}>- 4.8</Text>
          </ListItem>
          <ListItem>
            <Link textDecoration={"underline"} href="#third">
              Farm together
            </Link>
            <Text as={"span"}>- 4.8</Text>
          </ListItem>
          <ListItem>
            <Link textDecoration={"underline"} href="#fourth">
              Royalty exchange
            </Link>
            <Text as={"span"}>- 4.8</Text>
          </ListItem>
          <ListItem>
            <Link textDecoration={"underline"} href="#fifth">
              Forge
            </Link>
            <Text as={"span"}>- 4.8</Text>
          </ListItem>
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
            <Heading color="white" as={"h3"} id="first">
              {el.name}- {el.rating}
            </Heading>
            <Text color={"#D1ED82"} fontWeight={"bold"} marginTop={"1rem"}>
              What is {el.name}?
            </Text>
            <Text color={"white"} marginTop={"1rem"}>
              <Link href={el.link} isExternal>
                {el.name} <ExternalLinkIcon />{" "}
              </Link>
              - {el.linkPara}
            </Text>
            {el.paras.map((para) => (
              <Text color={"white"} marginTop={"1rem"}>
                {para}
              </Text>
            ))}
            <Box marginTop={"1rem"}>
              <Text
                as={"span"}
                color={"#D1ED82"}
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
                color={"#D1ED82"}
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
              <Text color={"#D1ED82"} fontWeight={"bold"}>
                Pros:
              </Text>
              <UnorderedList paddingLeft={"2rem"}>
                {el.pros.map((pro) => (
                  <ListItem color={"white"} marginTop={"1rem"}>
                    {pro}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
            <Box marginTop={"1rem"} marginBottom={"5rem"}>
              <Text color={"#D1ED82"} fontWeight={"bold"}>
                Cons:
              </Text>
              <UnorderedList paddingLeft={"2rem"}>
                {el.cons.map((con) => (
                  <ListItem color={"white"} marginTop={"1rem"}>
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
