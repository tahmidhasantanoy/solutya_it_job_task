import Image from "next/image";
import Trail from "./components/pages/Trail";
import Testmonial from "./components/pages/Testmonial";
import BudgetFriendly from "./components/pages/BudgetFriendly";

export default function Home() {
  return (
    <>
      <p className="text-7xl text-red-700">
        This is the starting page of the app
      </p>
      <BudgetFriendly/>
      <Testmonial />
      <Trail />
    </>
  );
}
