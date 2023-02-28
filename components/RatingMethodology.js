// "use client";

import { Container, Text, Box } from "@chakra-ui/react";

export default function RatingMethodology() {
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
          At Best Investment List, we understand the importance of providing
          accurate and comprehensive information to help investors make informed
          decisions. That's why we use a thorough and rigorous rating system to
          evaluate investment platforms and provide valuable insights to our
          users.
        </Text>
        <Text as={"p"} color={"white"} marginTop={"1rem"}>
          Our rating system takes into account a variety of factors, including:
        </Text>
        <Box paddingLeft={"2rem"}>
          <Text as={"p"} color={"white"} marginTop={"1rem"}>
            <Text color={"#D1ED82"} as={"span"} fontWeight={"bold"}>
              1. Performance:
            </Text>{" "}
            We evaluate the historical returns and risk-adjusted returns of each
            investment platform to get a better understanding of its
            performance. We also consider factors such as alpha (excess return
            relative to a benchmark) to ensure that we are accurately capturing
            the platform's performance.
          </Text>
          <Text as={"p"} color={"white"} marginTop={"1rem"}>
            <Text color={"#D1ED82"} as={"span"} fontWeight={"bold"}>
              2. Risk:
            </Text>{" "}
            We use metrics such as standard deviation, beta, and maximum
            drawdown to quantify the potential for losses and volatility in each
            investment platform. This helps us to provide a complete picture of
            the risks associated with each platform.
          </Text>
          <Text as={"p"} color={"white"} marginTop={"1rem"}>
            <Text color={"#D1ED82"} as={"span"} fontWeight={"bold"}>
              3. Assets under management (AUM):
            </Text>{" "}
            We consider the amount of assets managed by each investment platform
            as a factor in determining its stability and success.
          </Text>
          <Text as={"p"} color={"white"} marginTop={"1rem"}>
            <Text color={"#D1ED82"} as={"span"} fontWeight={"bold"}>
              4. Management experience and expertise:
            </Text>{" "}
            We evaluate the experience and expertise of each investment
            platform's management team to understand the quality of its
            leadership. This includes factors such as the length of time the
            team has been managing the platform, its track record, and the
            team's qualifications and credentials.
          </Text>
          <Text as={"p"} color={"white"} marginTop={"1rem"}>
            <Text color={"#D1ED82"} as={"span"} fontWeight={"bold"}>
              5. Strategy and investment approach:
            </Text>{" "}
            We evaluate the investment strategy and approach used by each
            investment platform to understand how it plans to generate returns
            and manage risk.
          </Text>
          <Text as={"p"} color={"white"} marginTop={"1rem"}>
            <Text as={"span"} fontWeight={"bold"}>
              6. Fees and expenses:
            </Text>{" "}
            We consider the fees and expenses charged by each investment
            platform to understand the value for money it provides to its users.
          </Text>
        </Box>
        <Text as={"p"} color={"white"} marginTop={"1rem"}>
          At Best Investment List, we believe that by considering these factors,
          we are able to provide our users with an accurate and comprehensive
          view of each investment platform, helping them to make informed
          investment decisions.
        </Text>
        <Text as={"p"} color={"white"} marginBottom={"5rem"} marginTop={"2rem"}>
          However, it's important to note that these ratings are not a guarantee
          of future performance, and the information provided by Best Investment
          List should not be the sole basis for making investment decisions.
          Factors such as market conditions, economic changes, and investment
          platform performance can significantly impact investment results, and
          there is always the potential for loss. It's important to do your own
          research, consider your own financial goals and risk tolerance, and
          seek advice from a financial advisor before making any investment
          decisions.
        </Text>
      </Box>
    </Container>
  );
}
