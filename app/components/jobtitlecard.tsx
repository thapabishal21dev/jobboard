import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const jobTitleList = [
  "fullstack",
  "frontend",
  "backend",
  "ui/ux designer",
  "graphic designer",
  "project manager",
  "python developer",
  "fullstack",
  "frontend",
  "backend",
  "ui/ux designer",
  "graphic designer",
  "project manager",
  "python developer",
];

const JobTitleCard = () => {
  return (
    <section className="w-full py-12 px-40">
      <div className=" px-10">
        <Carousel
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {jobTitleList.map((testimonial, index) => (
              <CarouselItem key={index} className="lg:basis-1/5">
                <div className=" text-xl border-2 border-slate-300 px-2 py-1  rounded-xl flex justify-center hover:bg-slate-200 cursor-pointer">
                  {testimonial}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-black" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-black" />
        </Carousel>
      </div>
    </section>
  );
};

export default JobTitleCard;
