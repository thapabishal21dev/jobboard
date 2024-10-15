import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Register = () => {
  return (
    <div className=" bg-gray-100 h-screen flex justify-center">
      <div className=" text-sm p-12 bg-white rounded w-[400px] h-fit">
        <div>
          <h1 className=" text-xl py-2">Create your Job Account</h1>
        </div>
        <form>
          <div>
            <label htmlFor="fullname">Full Name</label>
            <Input
              className="my-2"
              type="text"
              id="fullname"
              placeholder="Enter your fullname"
            />
          </div>
          <div>
            <label className="my-1" htmlFor="email">
              Email
            </label>
            <Input
              className="my-2"
              type="email"
              placeholder="Enter your email address"
              id="email"
            />
          </div>
          <div>
            <label>Password</label>
            <Input
              className="my-2"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <Input
              className="my-2"
              type="confirmPassword"
              id="confirmPassword"
              placeholder="confirm password"
            />
          </div>
          <div>
            <label>Phone</label>
            <Input
              className="my-2"
              type="number"
              id="Phone"
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <Label htmlFor="framework">Role</Label>
            <Select>
              <SelectTrigger id="framework">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="next">JobSeeker</SelectItem>
                <SelectItem value="sveltekit">Recruiter </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className=" w-full my-4" variant="default">
            Register
          </Button>
          <div className=" flex flex-col items-cEnter">
            <Link href="/login">
              <p className=" text-cEnter text-sm text-blue-500 cursor-pointer ">
                Already have an account? Log in
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
