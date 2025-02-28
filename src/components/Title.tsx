const Title = ({ title, subTitle }: TTitleProps) => {
  return (
    <div className="my-20">
      <h4 className="mb-2 text-sm sm:text-lg text-center text-[#9e2319]">
        {title}
      </h4>
      <h3 className="text-4xl sm:text-6xl lg:text-[58px] text-center text-[#112269]">
        {subTitle}
      </h3>
    </div>
  );
};

export default Title;
