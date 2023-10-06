import Image from "next/image";
import {BsFillDice5Fill} from "react-icons/bs"

export default function Home() {
  return (
    <main className="flex h-full w-full min-h-screen flex-col bg-gray-800 items-center justify-center">
      {/* Advise Card  */}
      <div className="relative w-[360px] h-[370px] bg-gray-700 space-y-6 py-8 rounded-xl px-6 text-center">
        <p className="text-sm text-green-300 tracking-widest font-semibold">
          ADVISE # 117
        </p>
        <h1 className="text-xl text-gray-200 font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          adipisci veniam sunt quia molestiae quasi odit rerum iure repellat
          dolores aliquid eius,
        </h1>

        <div className="x w-full flex justify-between items-center gap-4">
          {/* line 1 */}
          <div className="w-full h-[1px] bg-gray-500" />
          <div className="w-5 flex justify-center items-center gap-2">
            <div className="w-[8px] h-4 rounded bg-gray-300" />
            <div className="w-[8px] h-4 rounded bg-gray-300" />
          </div>
          {/* line 1 */}
          <div className="w-full h-[1px] bg-gray-500" />
          {/* Dice button  */}
          <div className="absolute flex justify-center items-center bottom-[-65px] left-1/2 -translate-x-1/2 -translate-y-1/2  w-16 h-16 bg-green-400 rounded-full cursor-pointer">
            <BsFillDice5Fill size={25} className="text-gray-800" />
          </div>
        </div>
      </div>
    </main>
  );
}
