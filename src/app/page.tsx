"use client";
import { spawn } from "child_process";
import { useState } from "react";
import { BsFillDice5Fill } from "react-icons/bs";
import useSWR from "swr";
import { motion } from "framer-motion";

type FetcherArgs = [input: RequestInfo, init?: RequestInit];

const fetcher = (...args: FetcherArgs) =>
  fetch(...args).then((res) => res.json());

const fetchData = async () => {
  const response = await fetcher("https://api.adviceslip.com/advice");
  return response;
};

export default function Home() {
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    "https://api.adviceslip.com/advice",
    fetcher
  );

  const generateAdvice = async () => {
    try {
      const newData = await fetchData();
      mutate(newData, false); // Set revalidate to false to prevent automatic revalidation
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(data);

  return (
    <main className="flex h-full w-full min-h-screen flex-col bg-gray-800 items-center justify-center">
      {/* Advise Card  */}
      <div className="relative flex flex-col justify-between w-[300px] sm:w-[350px] h-[310px] sm:h-[350px] bg-gray-700 space-y-8 py-8 rounded-xl px-6 text-center">
        <p className="text-xs sm:text-sm text-green-300 tracking-widest font-semibold">
          ADVISE # {data && data.slip.id}
        </p>
        <h1 className="text-xl sm:text-2xl text-gray-200 font-bold">
          {data || !isLoading ? data.slip.advice : <span>Loading ...</span>}
        </h1>

        <div className="x w-full flex justify-between items-center gap-4 pb-10">
          {/* line 1 */}
          <div className="w-full h-[1px] bg-gray-500" />
          <div className="w-5 flex justify-center items-center gap-2">
            <div className="w-[8px] h-4 rounded bg-gray-300" />
            <div className="w-[8px] h-4 rounded bg-gray-300" />
          </div>
          {/* line 1 */}
          <div className="w-full h-[1px] bg-gray-500" />
          {/* Dice button  */}
          <motion.div
            onClick={generateAdvice}
            className="absolute  flex justify-center items-center bottom-[-65px] left-1/2 -translate-x-1/2 -translate-y-1/2  w-16 h-16 bg-green-300 hover:bg-hsl-primary rounded-full cursor-pointer"
            whileHover={{ boxShadow: "0px 0px 20px hsl(150, 100%, 66%)"  }}
          >
            <BsFillDice5Fill size={25} className="text-gray-800" />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
