import React, { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const routers = useRouter();

  return (
    <div>
    hello
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { req } = ctx;
  let boatUsedList = [];

  //   let boatUsedResult = await axiosGet(apiRouter.BOATUSEDTYPELIST);

  //   if (boatUsedResult.data && boatUsedResult.data.data) {
  //     boatUsedList = boatUsedResult.data.data;
  //   }
  return {
    props: {
      boatUsedList,
    },
  };
};
export default Home;
