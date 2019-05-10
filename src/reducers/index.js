import { combinedReducers } from "redux";
import location from "./location";
import animal from "./animal";
import breed from "./breed";
import breeds from "./breeds";

export default combinedReducers({
  location,
  animal,
  breed,
  breeds
});
