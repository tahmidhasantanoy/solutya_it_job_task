import Image from "next/image";
import Trail from "./components/pages/Trail";

export default function Home() {
  return (
    <>
      <p className="text-7xl text-red-700">
        This is the starting page of the app
      </p>
      <Trail />
    </>
  );
}
