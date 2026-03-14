const TransformationCard = ({ title, sign, image, afterMode, data }) => {

  const bg = afterMode ? "bg-main text-light" : "bg-gray-100 text-main";
  const signColor = afterMode ? "text-grass" : "text-danger";

  return (
    <div className={`${bg} rounded-xl shadow-md hover:shadow-xl py-4 hover:scale-[1.02] transition-all duration-300 overflow-hidden`}>
      <div
        className="w-full aspect-[16/9] bg-center bg-cover"
        style={{
          backgroundImage: `url(/images/${image}11.png)`,
          filter: "contrast(0.95) saturate(0.95)"
        }}
      />
      <div className="place-items-center">
        <h3 className="text-lg font-semibold py-3">
          {title}
        </h3>
        <ul className="space-y-3 pb-4 px-5">
          {data.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className={signColor}>{sign}</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
 export default TransformationCard;