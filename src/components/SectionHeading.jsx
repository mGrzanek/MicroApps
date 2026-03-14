const SectionHeading = ({ children }) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex-grow border-t border-gray-300"></div>

      <h2 className="mx-6 font-inter text-2xl md:text-3xl place-items-center font-semibold text-main">
        {children}
      </h2>

      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default SectionHeading;