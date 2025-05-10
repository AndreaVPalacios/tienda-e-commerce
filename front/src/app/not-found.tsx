const notFound = () => {
  return (
    <div>
      <div className="bg-black overflow-hidden w-full h-16 flex items-center " />
      <div className="bg-red-400 text-neutral-100 text-center items-center justify-center p-10 ">
        <img src="/images/apple-watch-404.png" className="w-full h-full" />
        <h1 className="pb-64 text-5xl">Ups, este artículo no lo tenemos aún</h1>
      </div>
    </div>
  );
};

export default notFound;
