import Image from "next/image";

const Article = () => {
  return (
    <article className="flex flex-col bg-white rounded-xl">
      <div className="rounded-lg">
        <Image
          className="rounded-l-xl rounded-r-xl"
          src={"/r1.jpg"}
          layout="responsive"
          width={100}
          height={80}
          alt="Research-image"
        />
      </div>
      <div className="p-4">
        <h2 className="max-w-lg my-4 font-bold text-xl">
          Planar MIMO Antennas for Sub-6 GHz and Millimeter-wave 5G Applications
        </h2>
        <p className="max-w-lg text-sm">
          The 5G system is expected to have a data rate 1000 times higher
          compared to 4G communication system...
        </p>
      </div>
      <div className="p-4 flex justify-between items-center">
        <button className="py-2 text-sm px-6 bg-gradient-to-tr from-[#2f2d71] to-[#d62c1f] rounded-xl text-white flex gap-2 items-center hover:bg-gradient-to-l transition duration-300 animate-slideBottom w-max">
          Read Thesis
        </button>

        <p className="font-bold uppercase">Thesis</p>
      </div>
    </article>
  );
};

export default Article;
