import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppBar from "../components/appbar/AppBar";
import Layout from "../components/layout/Layout";
import RequireAuth from "../components/requireAuth/RequireAuth";
import Auth from "../pages/auth/Auth";
import { CURRENCY_ROUTE } from "./currencyRoute";
import { LOGIN_ROUTE } from "./loginRoute";
import { MY_ACCOUNT_ROUTE } from "./myAccountRoute";
import { PROFILE_ROUTE } from "./profileRoute";
import { SETTINGS_ROUTE } from "./settingsRoute";

//FIXME: lazy loading can lead to different version error, think about using service worker but using service workers is also problematic so i think is better not to use lazy loading at all
const Currency = lazy(() => import("../pages/currency/Currency"));
const NoMatch = lazy(() => import("../pages/no-match/NoMatch"));
const Profile = lazy(() => import("../pages/profile/Profile"));
const MyAccount = lazy(() => import("../pages/my-account/MyAccount"));
const Settings = lazy(() => import("../pages/app-settings/AppSettings"));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <Layout navbar={<AppBar />} />
          </RequireAuth>
        }
      >
        <Route index element={<Navigate replace to={CURRENCY_ROUTE.path} />} />
        <Route path={CURRENCY_ROUTE.path} element={<Currency />} />

        <Route path={PROFILE_ROUTE.path} element={<Profile />} />
        <Route path={MY_ACCOUNT_ROUTE.path} element={<MyAccount />} />
        <Route path={SETTINGS_ROUTE.path} element={<Settings />} />
      </Route>
      <Route path={LOGIN_ROUTE.path} element={<Auth />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
