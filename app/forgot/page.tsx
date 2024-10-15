import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Forgot = () => {
  return (
    <div className=" bg-gray-100 h-screen flex justify-center p-24  ">
      <div className=" p-10 bg-white rounded w-[450px] h-fit">
        <div>
          <h1 className=" text-xl py-2">Reset Password </h1>
        </div>
        <form>
          <div>
            <Input
              className="my-1 h-12"
              type="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <Button type="submit" className=" w-full my-4" variant="default">
            send verification link
          </Button>
          <div className=" text-sm flex flex-col items-center ">
            <Link href="/login">
              <p className=" text-center text-sm text-blue-500 cursor-pointer ">
                Go back to Login
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
