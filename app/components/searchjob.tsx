import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const SearchJob = () => {
  return (
    <div className=" flex flex-col justify-center items-center">
      <div className=" flex flex-col items-center gap-4  py-12">
        <h1 className=" text-4xl font-bold ">Find your dream job now</h1>
        <p className=" text-lg ">1000+ jobs for you to explore</p>
      </div>
      <div className=" bg-white rounded-full p-3 w-2/3 flex items-center">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />

          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g id="SVGRepo_iconCarrier">
            <path
              d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
              stroke="#c4c4c4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />{" "}
          </g>
        </svg>
        <Input
          placeholder="Enter jobTitle / company"
          className=" border-none text-lg"
        />
        <Button className=" px-12 rounded-full bg-blue-700 hover:bg-blue-800 text-lg">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchJob;
