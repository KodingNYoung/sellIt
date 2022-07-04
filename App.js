import Listings from "./app/screens/Listings";
import ViewImage from "./app/screens/ViewImage";
import Welcome from "./app/screens/Welcome";
import ListingDetails from "./app/screens/ListingDetails";
import Messages from "./app/screens/Messages";
import AppSafeScreen from "./app/components/Screen/AppSafeScreen";
import Account from "./app/screens/Account";
import Test from "./app/screens/Test";
import Login from "./app/screens/Login";

export default function App() {
  return (
    <AppSafeScreen>
      {/* <Welcome /> */}
      {/* <ViewImage /> */}
      {/* <Listings /> */}
      {/* <Messages /> */}
      {/* <ListingDetails /> */}
      {/* <Account /> */}
      <Login />
      {/* <Test /> */}
    </AppSafeScreen>
  );
}
