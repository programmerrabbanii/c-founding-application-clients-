import { useLoaderData } from "react-router-dom";
import ContactUs from "../components/ContactUs";
import FAQ from "../components/FAQ";
import HomeCard from "./HomeCard";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const homePageData = useLoaderData();
  return (
    <div>
      <h3 className="text-center text-3xl font-semibold mt-10">
        <Typewriter
          words={["Running Campaign Section"]}
          loop={1} 
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 mx-auto py-8">
        {homePageData.map((homeCollection) => (
          <HomeCard homeCollection={homeCollection} key={homeCollection._id}></HomeCard>
        ))}
      </div>

      <ContactUs></ContactUs>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
