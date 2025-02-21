import Image from "../assets/2f.png";

const WorkShowcase = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto grid grid-cols-12 gap-4">
        {/* First Column */}
        <div className="col-span-4 border-r p-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
            <img src={Image} alt="Stream Setup" className=" object-cover" />
          </div>
          <div className="flex items-start gap-2">
            <h3 className="font-bold" style={{ fontFamily: "monospace" }}>
              AVRO KO
            </h3>
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
              NEW
            </span>
          </div>
          <p
            className="text-xl font-bold leading-relaxed"
            style={{
              textShadow: "1px 1px 0 #000",
              fontFamily: "monospace",
            }}
          >
            AvroKO is an award-winning global design firm, established itself as
            a global leader in interior architecture for hospitality, restaurant
            and bars.
          </p>
        </div>

        {/* Middle Column */}
        <div className="col-span-4 flex flex-col items-center justify-center px-8 border-r ">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "monospace" }}
          >
            ALL WORK!
          </h2>
          <div className="text-center">
            <p
              className="text-xl font-bold leading-relaxed"
              style={{
                textShadow: "1px 1px 0 #000",
                fontFamily: "monospace",
              }}
            >
              A Featured selection
              <br />
              the latest work —<br />
              of the last years.
            </p>
            <span
              className="text-sm opacity-60"
              style={{ fontFamily: "monospace" }}
            >
              ⟷ Drag sideways to navigate
            </span>
          </div>
        </div>

        {/* Third Column */}
        <div className="col-span-4 p-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
            <img src={Image} alt="The Roger Hub" className=" object-cover" />
          </div>
          <div className="flex items-start gap-2">
            <h3 className="font-bold" style={{ fontFamily: "monospace" }}>
              THE ROGER HUB
            </h3>
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded">
              NEW
            </span>
          </div>
          <p
            className="text-xl font-bold leading-relaxed"
            style={{
              textShadow: "1px 1px 0 #000",
              fontFamily: "monospace",
            }}
          >
            The Roger Hub is an immersive web experience showcasing the
            tennis-inspired 'On' sneakers, a collaboration born out of a
            partnership with the legendary Roger Federer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkShowcase;
