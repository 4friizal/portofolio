import Header from "../../components/Header";
import Type from "./type";

export default function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <div className="h-screen min-w-full bg-black">
        <div className="flex items-center text-2xl h-1/2">
          <Type />
        </div>
      </div>
      <div className="h-screen min-w-full bg-red-400">
        <div className="flex text-2xl"></div>
      </div>
      <div className="min-h-screen min-w-full bg-sky-400">
        <div className="flex text-2xl"></div>
      </div>
    </>
  );
}
