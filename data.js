import colors from "./app/config/colors";

export const initialMessage = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("./app/assets/mosh.jpg")
  },
  {
    id: 2,
    title: "T1",
    description: "D2",
    image: require("./app/assets/mosh.jpg")
  }
];

export const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    }
  }
];

export const listings = [
  {
    id: 1,
    title: "A simple red jacket",
    price: "$20",
    image: require("./app/assets/jacket.jpg")
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: "$200",
    image: require("./app/assets/couch.jpg")
  },
  {
    id: 3,
    title: "Couch in great condition",
    price: "$200",
    image: require("./app/assets/couch.jpg")
  }
];
export const pickerValues = [
  { value: "girl", label: "Girl" },
  { value: "boy", label: "Boy" }
];
