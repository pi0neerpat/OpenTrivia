import React from "react";
import { Container } from "semantic-ui-react";
import HeaderMenu from "./HeaderMenu";
//Head places any tags into head tag of HTML document
//Place SEO tags in the HEAD!!!!
import Head from "next/head";

export default props => {
  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"
        />
      </Head>
      <HeaderMenu />
      {props.children}
    </Container>
  );
};
