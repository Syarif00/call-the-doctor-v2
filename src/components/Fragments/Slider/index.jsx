import { Carousel, Typography, Button } from "@material-tailwind/react";
import carousel1 from "../../../assets/carousel-1.png";
import carousel2 from "../../../assets/carousel-2.png";
import carousel3 from "../../../assets/carousel-3.png";

const Slider = () => {
  return (
    <Carousel className="lg:h-full ">
      <div className="relative w-full max-h-[75vh] min-h-[75vh]">
        <img
          src={carousel1}
          alt="image 1"
          className="object-cover w-full max-h-[75vh] min-h-[75vh]"
        />
        <div className="absolute inset-0 grid items-center w-full max-h-[75vh] min-h-[75vh] bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl"
            >
              Pengobatan cukup dari rumah aja
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-sm opacity-80 md:text-base lg:text-lg"
            >
              Membantu anda mendapatkan pelayanan kesehatan dari rumah dengan
              dokter dan tim medis yang berpengalaman
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" className="bg-hijau">
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full max-h-[75vh] min-h-[75vh]">
        <img
          src={carousel2}
          alt="image 1"
          className="object-cover w-full max-h-[75vh] min-h-[75vh]"
        />
        <div className="absolute inset-0 grid items-center w-full max-h-[75vh] min-h-[75vh] bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl"
            >
              Pengobatan cukup dari rumah aja
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-sm opacity-80 md:text-base lg:text-lg"
            >
              Membantu anda mendapatkan pelayanan kesehatan dari rumah dengan
              dokter dan tim medis yang berpengalaman
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" className="bg-hijau">
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full max-h-[75vh] min-h-[75vh]">
        <img
          src={carousel3}
          alt="image 1"
          className="object-cover w-full max-h-[75vh] min-h-[75vh]"
        />
        <div className="absolute inset-0 grid items-center w-full max-h-[75vh] min-h-[75vh] bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl"
            >
              Pengobatan cukup dari rumah aja
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-sm opacity-80 md:text-base lg:text-lg"
            >
              Membantu anda mendapatkan pelayanan kesehatan dari rumah dengan
              dokter dan tim medis yang berpengalaman
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" className="bg-hijau">
                Daftar Sekarang
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
