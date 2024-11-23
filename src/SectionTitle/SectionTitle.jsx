const SectionTitle = ({ heading, subHeading }) => {
  return (
    <>
      <div className="text-center space-y-5 my-10">
        <h2 className="lg:text-3xl text-lg font-bold">{heading}</h2>
        <p className="text-base lg:text-lg w-3/5 mx-auto">{subHeading}</p>
      </div>
    </>
  );
};

export default SectionTitle;
