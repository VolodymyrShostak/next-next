"use client";

import Image from "next/image";
import React, { FC } from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  Heading,
  TableContainer,
  Box,
} from "@chakra-ui/react";

const Country: FC<any> = ({ country }) => {
  console.log("🚀 ~ file: [name].jsx:4 ~ Country ~ country:", country);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading mb="2">{country.name.common}</Heading>
      <Image
        src={country.flags.png}
        alt="Flag of the country"
        width={300}
        height={200}
      />
      <TableContainer>
        <Table size="md" mt="2" variant="striped" colorScheme="teal">
          <Tbody>
            <Tr>
              <Td>Native Name:</Td>
              <Td>{country.name.common}</Td>
            </Tr>
            <Tr>
              <Td>Population:</Td>
              <Td>{country.population}</Td>
            </Tr>
            <Tr>
              <Td>Region: </Td>
              <Td>{country.region}</Td>
            </Tr>
            <Tr>
              <Td>Sub Region:</Td>
              <Td>{country.subregion}</Td>
            </Tr>
            <Tr>
              <Td>Capital:</Td>
              <Td>{country.capital}</Td>
            </Tr>
            <Tr>
              <Td> Currencies:</Td>
              <Td>
                {Object.values(country.currencies)
                  .map((currency) => currency?.name)
                  .join(", ")}
              </Td>
            </Tr>
            <Tr>
              <Td>Languages:</Td>
              <Td>{Object.values(country.languages).join(", ")}</Td>
            </Tr>
            <Tr>
              <Td>Border Countries: </Td>
              <Td>{country.borders?.join(", ")}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Country;

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  const paths = countries.map((country: { name: { common: any } }) => ({
    params: { name: country.name.common },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { name } }: any) => {
  const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);

  const country = await data.json();

  console.log("aaaaaa==============", country);

  return {
    props: {
      country: country[0],
    },
  };
};
