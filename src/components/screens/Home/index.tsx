"use client";

import React, { FC } from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  TableContainer,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const CountriesList: FC<any> = ({ countries }) => {
  const router = useRouter();
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Flag</Th>
            <Th>Name</Th>
            <Th>Population</Th>
            <Th>Region</Th>
            <Th>Capital</Th>
          </Tr>
        </Thead>
        <Tbody>
          {countries.map((country: any) => (
            <Tr
              key={country.name.common}
              onClick={() => router.push(`/country/${country.name.common}`)}
            >
              <Td>
                {/* <img src={country.flags[0]} alt={country.name.common} /> */}
              </Td>
              <Td>{country.name.common}</Td>
              <Td>{country.population}</Td>
              <Td>{country.region}</Td>

              <Td>{country.capital}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CountriesList;
