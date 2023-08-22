import React, { Suspense } from "react";
import { Container, Loader } from "./styles";

function LoaderComponent() {
  return (
    <Container>
      <Loader>
        <div />
        <div />
        <div />
        <div />
      </Loader>
    </Container>
  );
}

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoaderComponent />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
