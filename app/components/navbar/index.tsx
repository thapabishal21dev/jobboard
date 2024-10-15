import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className=" flex items-center h-20  justify-around  ">
      <div className=" flex gap-20">
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-blue-700">
            JobBoard
          </h3>
        </div>
        <div className=" flex items-center gap-10">
          <Link href="/jobs">Jobs</Link>
          <Link href="home">Home</Link>
          <Link href="home">Companies</Link>
        </div>
      </div>
      <div className=" flex gap-10 items-center">
        <div className=" flex gap-5">
          <Button variant="outline">Login</Button>
          <Button variant="outline">Register</Button>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
