import Article from "./Article";
import Title from "./Title";

const Research = () => {
  return (
    <div className="text-[#112269] px-10">
      <Title title={"My Work"} subTitle={"Research"} />
      <div className="max-w-[1200px] mx-auto grid grid-cols-auto gap-10">
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
};

export default Research;
