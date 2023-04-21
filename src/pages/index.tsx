"use client";

import Header from "@/components/Header";
import Layout from "@/components/Layout";
import CountriesList from "@/components/screens/Home";
import { Input } from "@chakra-ui/react";
import { FC, useState } from "react";

export default function Home({ countries }: any) {
  // const [keyword, setKeyword] = useState("");

  // // const filteredCountries = countries.filter((country) =>

  // //   country.name.toLowerCase().includes(keyword)
  // // );

  // const onInputChange = (e: { preventDefault: () => void; target: { value: string; }; }) => {
  //   e.preventDefault();

  //   setKeyword(e.target.value.toLowerCase());
  // };

  return (
    <Layout children={undefined}>
      <Input
        variant="filled"
        placeholder="Search for a country..."
        width="450px"
        // onChange={onInputChange}
      />
      <CountriesList countries={countries} />
    </Layout>
  );
}
export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
