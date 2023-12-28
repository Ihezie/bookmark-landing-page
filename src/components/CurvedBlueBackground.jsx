const CurvedBlueBackground = ({ flip }) => {
  return (
    <div
      className={`absolute  bg-softBlue  -z-10 ${
        flip
          ? "top-[17%] w-3/5 left-0 rounded-br-[35%] h-full max-h-[360px] xs:max-h-[420px] md:max-h-[520px]"
          : "rounded-bl-[40%] w-4/5 top-1/4 right-0 h-3/4 lg:rounded-bl-[35%] lg:h-2/3 lg:top-1/3 lg:w-3/4"
      }  `}
    ></div>
  );
};
export default CurvedBlueBackground;
