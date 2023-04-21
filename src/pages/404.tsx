"use client";

import { useEffect } from "react";

import { useRouter } from "next/router";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 3000);
  }, [router]);

  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        Ooops!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Something went wrong. Page not found. You will be redirected to the home
        page in 3 seconds.
      </AlertDescription>
    </Alert>
  );
};

export default Error;
