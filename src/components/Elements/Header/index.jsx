const Header = (props) => {
  const { children } = props;
  return (
    <div className="container px-5 mx-auto my-10">
      <h1 className="text-5xl font-bold text-primary">{children}</h1>
      <div className="w-6/12 h-1 bg-secondary"></div>
    </div>
  );
};

export default Header;
