const Prices = (props) => {
  const { logo, title, desc, showPrice } = props;
  return (
    <div className="container px-5 mx-auto">
      {showPrice && (
        <h2 className="text-4xl font-bold text-center text-primary">
          DAFTAR HARGA
        </h2>
      )}
      <div className="p-8 mt-5 rounded-lg bg-secondary">
        <div className="flex items-center gap-5 flex-start">
          <div className=" relative bg-white rounded-full h-[105px] w-[105px] items-center">
            <div className="absolute bottom-7 left-7">{logo}</div>
          </div>
          <div className="items-center text-xl font-bold text-white lg:text-2xl">
            <h3>{title}</h3>
          </div>
        </div>
        <div className="text-sm ">
          <p className="my-4 font-medium text-white">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Prices;
