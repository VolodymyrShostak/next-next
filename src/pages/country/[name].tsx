'use client'

import Image from "next/image";
import React, { FC } from "react";

const Country: FC<any>= ({ country }) => {
  console.log("🚀 ~ file: [name].jsx:4 ~ Country ~ country:", country);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <Image
        src={country.flags.png}
        alt="Picture of the author"
        width={500}
        height={400}
      />
    </div>
  );
};

export default Country;

export const getStaticPaths = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  const paths = countries.map((country: { name: { common: any; }; }) => ({
    params: { name: country.name.common },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { name } }: any) => {
  const data = await fetch(
    `https://restcountries.com/v3.1/name/${name}`
  );

  const country = await data.json();

  console.log("aaaaaa==============", country);

  return {
    props: {
      country: country[0],
    },
  };
};
