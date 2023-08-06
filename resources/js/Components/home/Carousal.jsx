import { Carousel as DCarousel } from "@material-tailwind/react";

export default function Carousel() {

    const carouselImages = [
        {
            id: 1,
            image: "https://stellarjardinresidence.com/assets/img/carousal/carousal2.png",
        },
        {
            id: 2,
            image: "https://stellarjardinresidence.com/assets/img/carousal/carousal3.png",
        },
    ];
    return (
        <DCarousel
            loop
            autoplay
            autoplayDelay={4000}
            // className="h-[40rem]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-30 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-3 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i
                                    ? "bg-white w-14"
                                    : "bg-white/50 w-6"
                            }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <div className="flex relative w-full lg:h-[40rem] md:h-[30rem] h-[17rem]">
                <img
                    src="https://stellarjardinresidence.com/assets/img/carousal/carousal1.png"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <div className="absolute flex items-center w-full h-full  ">
                    <div className="md:ml-40 ml-14 mt-6 md:mt-0">
                        <h1 className="text-white lg:text-7xl md:text-5xl text-xl font-bold max-w-[30rem]">
                            STELLAR JARDIN RESIDENCE
                        </h1>
                        <p className="text-white lg:text-2xl md:text-md text-[0.7rem] lg:max-w-[40rem] md:max-w-[20rem] max-w-[15rem]">
                            Keanggunan Skandinavia, Hunian Damai, Kemewahan
                            Memukau. Wujudkan Impian Rumah Anda di Sini, Tempat
                            Realisasi Impian Terbaik.
                        </p>
                    </div>
                </div>
            </div>
            {carouselImages.map((image, index) => (
                <div
                    key={index}
                    className="relative h-[17rem] lg:h-[40rem] md:h-[30rem]"
                >
                    <img
                        src={image.image}
                        alt="image 1"
                        className="h-full w-full object-cover"
                    />
                </div>
            ))}
        </DCarousel>
    );
}
