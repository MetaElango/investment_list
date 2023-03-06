"use client";

import { useState, useEffect } from "react";
import Multiselect from "multiselect-react-dropdown";

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
  Image,
  Flex,
  Link,
  Spinner,
  Select,
  Tag,
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

export default function CompanyList() {
  const [data, setData] = useState([]);
  const [initialList, setInitialList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [classes, setClasses] = useState([]);
  const [show, setShow] = useState([]);
  const [sortBy, setSortBy] = useState("ratings");
  const [showCount, setShowCount] = useState(0);
  const sortByList = [
    // { type: "top5", name: "Top 5" },
    { type: "ratings", name: "Ratings: High to Low" },
    // { type: "returns", name: "Returns: High to Low" },
  ];
  const [currentFilteredList, setCurrentFilteredList] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://opensheet.elk.sh/10nLZz7OlrF3iV_whdC8feNTC0CENjKDd3FbNDiOVhzE/1"
    )
      .then((res) => res.json())
      .then((data) => {
        const assetClasses = {};
        const assetClassesArr = [];
        const modifiedData = data.map((el) => {
          const classes = el.CLASS.split(",");
          if (classes.length > 1) {
            el.showClass = "Multi asset";
            classes.forEach((element) => {
              assetClasses[element] = true;
            });
          } else {
            el.showClass = classes[0];
            assetClasses[classes[0]] = true;
          }
          el.classesInArr = classes;
          return el;
        });

        for (const [key, value] of Object.entries(assetClasses)) {
          assetClassesArr.push(key);
        }
        setClasses(assetClassesArr);
        const sortedArray = sorting(sortBy, data);
        setData(sortedArray);
        setInitialList(sortedArray);
        setCurrentFilteredList(sortedArray);
        setLoading(false);
      });
  }, []);

  const sorting = (type, list) => {
    if (type === "ratings") {
      const listArr = list;
      listArr.sort((a, b) => b.RATINGS - a.RATINGS);
      return listArr;
    }
  };

  useEffect(() => {
    console.log("show useeffect is getting called", show);
    const showFilteredList = showFilter(show, initialList);
    setCurrentFilteredList(showFilteredList);
  }, [showCount]);
  useEffect(() => {
    const searchFilteredList = searchFilter(searchText, currentFilteredList);
    setData(searchFilteredList);
  }, [searchText, currentFilteredList]);
  // useEffect(() => {}, [currentFilteredList]);

  const searchFilter = (text, list) => {
    const search = text.toLowerCase().trim();
    const filteredList = [];
    if (search.length > 0) {
      list.forEach((el) => {
        const company = el["COMPANY NAME"].toLowerCase();
        const assetClass = el["CLASS"].toLowerCase();
        if (assetClass.includes(search) || company.includes(search)) {
          filteredList.push(el);
        }
      });
    }
    if (search.length > 0) {
      return filteredList;
    } else {
      return currentFilteredList;
    }
  };
  const showFilter = () => {
    let filteredList = [];

    if (show.length == 0) {
      return initialList;
    } else {
      filteredList = initialList.filter((el) => {
        // console.log(el.classesInArr.some((ai) => show.includes(ai)));
        return el.classesInArr.some((ai) => show.includes(ai));
      });
      // console.log(filteredList);
      return filteredList;
    }
  };
  const onFilterChange = (selectedList, selectedItem) => {
    // console.log("onFilterChange", selectedList, selectedItem);
    setShow(selectedList);
    setShowCount(selectedList.length);
    console.log("onFilter", show);
  };

  if (isLoading)
    return (
      <Container maxW={"7xl"} backgroundColor={"#070533"}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Spinner color="white" size={"xl"} />
        </Flex>
      </Container>
    );

  return (
    <Container maxW={"7xl"} backgroundColor={"#070533"}>
      <Box
        position="sticky"
        top={"0"}
        left={"0"}
        zIndex={"1000"}
        backgroundColor={"#070533"}
        py={"5"}
      >
        <Stack spacing={4}>
          <InputGroup border={"1px solid #ffffff1a"} borderRadius="md">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="#ffffff1a" _hover={{ color: "#000000" }} />
            </InputLeftElement>
            <Input
              type="tel"
              placeholder="Search by company name, asset classes"
              color={"white"}
              outline={"none"}
              _focusVisible={{ shadow: "outline" }}
              _focus={{ shadow: "none" }}
              _placeholder={{ color: "#ffffff1a" }}
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </InputGroup>
        </Stack>
        <Flex py={"10"} justifyContent={"space-between"} alignItems={"center"}>
          <Box
            display={{ xl: "block", md: "block", sm: "none", base: "none" }}
            flex={"1"}
          >
            <Heading size={"sm"} color={"#ffffffb3"}>
              Found:{" "}
              <Text as={"span"} color={"white"}>
                {data.length} results
              </Text>
            </Heading>
          </Box>
          <Flex
            flex={"1"}
            justifyContent={{
              sm: "flex-start",
              md: "flex-start",
              lg: "flex-end",
              xl: "flex-end",
            }}
          >
            <Box
              border={"1px solid #ffffff1a"}
              backgroundColor={"#ffffff1a"}
              borderRadius="md"
              // width={{ sm: "50%", md: "50%", lg: "30%", xl: "30%" }}
              p={"1"}
            >
              <Text
                size={"sm"}
                color={"#ffffffb3"}
                alignSelf={"center"}
                as={"span"}
              >
                Show
              </Text>
              <Box display={"inline-block"}>
                {/* <Select
                  size={"sm"}
                  color={"white"}
                  borderRadius={"md"}
                  border={"none"}
                  outline={"none"}
                  _focusVisible={{ shadow: "outline" }}
                  _focus={{ shadow: "none" }}
                  value={show}
                  onChange={(e) => {
                    setShow(e.target.value);
                  }}
                >
                  <option key={"allAssetClasses"} value={"allAssetClasses"}>
                    All Asset Classes
                  </option>
                  {classes.map((singleClass) => (
                    <option key={singleClass} value={singleClass}>
                      {singleClass}
                    </option>
                  ))}
                </Select> */}
                <Multiselect
                  // showArrow={true}
                  isSearchable={"false"}
                  avoidHighlightFirstOption={true}
                  hidePlaceholder={true}
                  selectedValueDecorator={() => {
                    return <div>selected one value</div>;
                  }}
                  isObject={false}
                  showCheckbox={true}
                  options={classes}
                  placeholder={"All asset classes"}
                  style={{
                    chips: {
                      background: "red",
                      // display: "none",
                    },
                    searchBox: {
                      // To change search box element look
                      border: "none",
                      color: "white",
                      fontSize: "14px",
                    },
                  }}
                  onSelect={(selectedList, selectedItem) => {
                    onFilterChange(selectedList, selectedItem);
                  }}
                  onRemove={(selectedList, selectedItem) => {
                    onFilterChange(selectedList, selectedItem);
                  }}
                  // Options to display in the dropdown
                  // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                  // onSelect={this.onSelect} // Function will trigger on select event
                  // onRemove={this.onRemove} // Function will trigger on remove event
                  // displayValue="name" // Property name to display in the dropdown options
                />
              </Box>
            </Box>
            <Box
              border={"1px solid #ffffff1a"}
              backgroundColor={"#ffffff1a"}
              borderRadius="md"
              // width={{ sm: "50%", md: "50%", lg: "30%", xl: "30%" }}
              p={"1"}
              marginLeft={"5"}
            >
              <Text
                // width={"30%"}
                size={"sm"}
                color={"#ffffffb3"}
                alignSelf={"center"}
                as={"span"}
              >
                Sort by
              </Text>
              <Box display={"inline-block"}>
                <Select
                  // placeholder="Select option"
                  size={"sm"}
                  color={"white"}
                  borderRadius={"md"}
                  border={"none"}
                  outline={"none"}
                  _focusVisible={{ shadow: "outline" }}
                  _focus={{ shadow: "none" }}
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                  }}
                >
                  {sortByList.map((sortByEl, index) => (
                    <option
                      // selected={index === 2}
                      key={sortByEl.type}
                      value={sortByEl.type}
                    >
                      {sortByEl.name}
                    </option>
                  ))}
                </Select>
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
      <SimpleGrid
        spacing={8}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
        py={"10"}
      >
        {data.map((el) => (
          <Card key={el["RANDOM ID"]} backgroundColor={"#1F1D44"}>
            <CardHeader>
              {/* <AspectRatio maxW="80px" ratio={4 / 3}> */}
              <Flex justifyContent={"space-between"}>
                <Box backgroundColor={"white"} borderRadius={"md"}>
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
                {Boolean(Number(el["TOP 5"])) && (
                  <Tag size={"sm"} verticalAlign="middle" marginLeft={"1rem"}>
                    Top 5
                  </Tag>
                )}
              </Heading>
              <Text py={"1"} color={"#ffffffb3"}>
                {el["DESCRIPTION"]}
              </Text>
              {/* <Box
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
              </Box> */}
            </CardBody>
            <CardFooter flexDirection={"column"}>
              <Box
                color={"white"}
                p={"2"}
                borderRadius={"md"}
                border={"1px solid #ffffff1a"}
                // width={"50%"}
              >
                <Flex alignItems={"center"}>
                  <ReturnsIcon />
                  <Text marginLeft={"2"}>
                    Minimum investment{" "}
                    <Text color={"#D1ED82"} as={"span"}>
                      &nbsp; {el["MINIMUM INVESTMENT"]}{" "}
                    </Text>
                  </Text>
                </Flex>
              </Box>
              <Flex marginTop={"5"}>
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
              </Flex>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

// useEffect(() => {
//   console.log("searchText", searchText);
//   searchFilter(initialList);
// }, [searchText]);

// useEffect(() => {
//   showFilter();
// }, [show]);

// const searchFilter = (data) => {
//   const search = searchText.toLowerCase();
//   const filteredList = [];
//   data.forEach((el) => {
//     const company = el["COMPANY NAME"].toLowerCase();
//     const assetClass = el["CLASS"].toLowerCase();

//     if (assetClass.includes(search) || company.includes(search)) {
//       filteredList.push(el);
//     }
//   });
//   if (search.length > 0) {
//     setData(filteredList);
//   } else {
//     setData(initialList);
//     showFilter();
//   }
// };
// const showFilter = () => {
//   let filteredList = [];

//   if (show === "allAssetClasses") {
//     setData(initialList);
//   } else if (show === "Multi Asset") {
//     filteredList = initialList.filter((el) => el.classesInArr.length > 1);
//   } else {
//     filteredList = initialList.filter((el) => el.classesInArr.includes(show));
//     setData(filteredList);
//   }
// };
