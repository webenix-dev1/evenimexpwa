const dashboardRoute = "/dashboard";

const router = {
  SPLASH: "/splashscreen",
  LOGIN: "/login",
  SIGNUP: "/register",
  FORGOTPASS: "/forgot-password",
  LISTYOURBOAT: "/list-your-boat",
  PROFILE: "/profile",
  HOME: "/",
  RESETPASS: "/reset-password/[token]",
  PAYOUTPREFERENCES: "/payout-preferences",
  CHANGEPASS: "/change-password",
  BOATREGISTRATIONONE: "/boat-registration-one",
  BOATREGISTRATIONTWO: "/boat-registration-two",
  BOATREGISTRATIONTHREE: "/boat-registration-three",
  SEARCHBOAT: "/search-result",
  DASHBOARD: dashboardRoute,
  BOATLISTING: dashboardRoute + "/boat-listing",
  DOCUMENTS: dashboardRoute + "/documents",
  CALENDAR: dashboardRoute + "/calendar",
  SAVEDBOAT: "/saved-boat",
  PASTUPCOMINGTRIP: "/trips",
};
export default router;
