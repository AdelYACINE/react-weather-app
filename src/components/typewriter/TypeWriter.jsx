import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypeWriter = () => {
  const [text] = useTypewriter({
    words: ["Welcome to weather app"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <div>
      <h1 className="typewriter">
        {text} <Cursor cursorStyle="/" cursorColor="orange" />
      </h1>
    </div>
  );
};

export default TypeWriter;
