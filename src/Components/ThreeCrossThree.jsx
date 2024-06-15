export const ThreeCrossThree = () => {

    return (
        <>
            <div className="grid grid-cols-3 grid-rows-3 h-screen">
                {Array.from({ length: 9 }, (_, index) => (
                    <Box key={index} />
                ))}
            </div>
        </>
    );
};

function Box(){
    return(
    <>
        <div className="bg-black w-full h-full max-h-full border-4 border-indigo-600">
            <button className=" flex items-center justify-center">
                <p className="text-white">hello</p>
            </button>
        </div>
    </>
    )
}