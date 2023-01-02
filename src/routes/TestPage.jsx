function TestPage() {
  return (
    <>
      <div className="text-white absolute top-40 left-0 right-0 w-fit grid grid-cols-1 grid-rows-2 z-50 h-1/3 m-auto">
        <div className="m-auto w-fit text-8xl">Villo</div>

        <div className="text-2xl w-2/3 m-auto">
          Code and Design <br /> with a personal touch
        </div>
      </div>
      <div className=" absolute h-full w-full top-0 left-0 grid grid-cols-2 grid-rows-2 z-10 overflow-hidden">
        <div className="">
          <video
            autoPlay={"true"}
            loop
            muted
            src="src\assets\code.mp4"
            className="absolute z-10 w-1/2"
          ></video>
        </div>
        <div className="border bg-blue-500">
          <video
            autoPlay={"true"}
            loop
            muted
            src="src\assets\code2.mp4"
            className="z-10 absolute w-1/2"
          ></video>
        </div>
        <div className="border bg-yellow-500">
          <video
            autoPlay={"true"}
            loop
            muted
            src="src\assets\numbers.mp4"
            className="absolute h-2/3 z-10 w-1/2"
          ></video>
        </div>
        <div className="border bg-green-500">
          <video
            autoPlay={"true"}
            loop
            muted
            src="src\assets\code3.mp4"
            className="absolute h-2/3 z-10 w-1/2"
          ></video>
        </div>
      </div>
    </>
  );
}

export default TestPage;
