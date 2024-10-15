import JobTitleCard from "./components/jobtitlecard";
import Navbar from "./components/navbar/index";
import SearchJob from "./components/searchjob";

export default function Home() {
  return (
    <>
      <Navbar />
      <SearchJob />
      <JobTitleCard />
    </>
  );
}
