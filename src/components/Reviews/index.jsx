import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.name}
              className="bg-white h-[450px] text-black rounded-xl"
            >
              <div className="h-56 bg-white flex justify-center items-center rounded-t-xl">
                <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                {/* <button className="bg-blue-300 text-white text-lg px-6 py-1 rounded-xl">
                  Read More
                </button> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: `Adheep George Paul `,
    img: `/images/adheep.png`,
    review: `Sourav was a game-changer for my music project. He scouted perfect locations, managed the schedule, and ensured everything ran smoothly. His compelling visuals brought my music to life in ways I couldn’t have imagined. Sourav’s dedication and attention to detail were exceptional. I highly recommend him for any creative endeavor.`,
  },
  {
    name: `Likitha S`,
    img: `/images/likhitha.png`,

    review: `Sourav and I worked on a digital marketing campaign together and he was brilliant when it came to executing the campaign. Sourav has a creative mind and his ideas are quite revolutionary. Working with him will demand that you too think wide and quick. He has a natural talent for learning concepts and tools quickly. Sourav never fails to come up with innovative solutions.`,
  },
  {
    name: `Jessica Que`,
    img: `/images/jessica.png`,
    review: `Sourav’s graphic design skills don’t disappoint. I turn to him for design help, and his creativity shines through. He’s also efficient at what he does so if you need an artist who can deliver, Sourav’s your guy!`,
  },
  {
    name: `Maria Redempta`,
    img: `/images/maria.png`,
    review: `Sourav is a great teamplayer and individual to work and discuss with. He has a great taste in photography and always so responsible on projects. He definitely the right person to reach out to when it comes to Digital Marketing and Social Media.`,
  },
];
