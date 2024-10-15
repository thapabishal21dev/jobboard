import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Login = () => {
  return (
    <div className=" bg-gray-100 h-screen flex justify-center p-24  ">
      <div className="  p-10 bg-white rounded w-[400px]">
        <div>
          <h1 className=" text-2xl py-2">Welcome Back</h1>
        </div>
        <form className=" text-sm">
          <div>
            <label htmlFor="email">Email</label>
            <Input
              className="my-1 h-12"
              type="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label>Password</label>
            <Input
              className="my-1 h-12"
              type="password"
              id="password"
              placeholder="Entre your password"
            />
          </div>
          <Button type="submit" className=" w-full my-4" variant="default">
            Login
          </Button>
          <div className=" text-sm flex flex-col items-center">
            <p>
              Don&apos;t have an account yet?
              <Link href="/register">
                <span className=" text-blue-500 cursor-pointer"> Sign up</span>
              </Link>
            </p>
            <Link href="/forgot">
              <p className=" text-blue-500 cursor-pointer">Forgot password?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
