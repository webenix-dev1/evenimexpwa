import React from "react";
import { useRouter } from "next/router";
import Footer from "../Footer";
import Header from "../Header";
import HomeBanner from "../HomeBanner";
import { PagesLayout } from "../../styles/global/main.style";
import router from "../../utils/router";

const Layout = ({ children }) => {
  const routers = useRouter();
  return (
    <PagesLayout>
      {routers.pathname != router.SPLASH &&
        routers.pathname != router.LOGIN &&
        routers.pathname != router.SIGNUP &&
        routers.pathname != router.FORGOTPASS &&
        routers.pathname != router.RESETPASS && <Header />}

      {routers.pathname != router.SPLASH &&
        routers.pathname != router.LOGIN &&
        routers.pathname != router.SIGNUP &&
        routers.pathname != router.FORGOTPASS &&
        routers.pathname != router.RESETPASS && <HomeBanner />}

      {routers.pathname != router.SPLASH &&
        routers.pathname != router.LOGIN &&
        routers.pathname != router.SIGNUP &&
        routers.pathname != router.FORGOTPASS &&
        routers.pathname != router.RESETPASS && <Footer />}
    </PagesLayout>
  );
};

export default Layout;
