const PaginationComponent = ({ pages, setCurrentPage }) => {
  return (
    <>
      <div className="flex flex-row h-9 mt-3">
        {Array.from(Array(pages), (item, index) => {
          return (
            <div>
              <button
                value={index}
                key={index}
                className="text-[#FFB11B] shadow-lg bg-black border-2 rounded-full h-8 w-8 text-1xl font-bold mr-3 hover:bg-white transition-alls"
                onClick={(e) => setCurrentPage(Number(e.target.value))}
              >
                {index + 1}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PaginationComponent;
