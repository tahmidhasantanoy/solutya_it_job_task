import Image from "next/image";
import Trail from "./components/pages/Trail";
import Testmonial from "./components/pages/Testmonial";
import BudgetFriendly from "./components/pages/BudgetFriendly";
import TimeTracking from "./components/pages/TimeTracking";
import TimeManagement from "./components/pages/TimeManagement";
import GoodUI from "./components/pages/GoodUI";

export default function Home() {
  return (
    <>
      <TimeTracking />
      <TimeManagement />
      <GoodUI />
      <BudgetFriendly />
      <Testmonial />
      <Trail />
    </>
  );
}
