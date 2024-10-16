type ButtonProps = {
  goTo?: () => void;
  goBackTo?: () => void;
  type: "next" | "previous";
};

const Button = ({ goTo, goBackTo, type }: ButtonProps) => {
  if (type === "next") {
    return (
      <button
        onClick={goTo}
        className="flex h-10 px-4 justify-center items-center rounded bg-pastel-purple-500 text-white"
      >
        Next
      </button>
    );
  }
  if (type === "previous") {
    return (
      <button
        onClick={goBackTo}
        className="flex h-10 px-4 justify-center items-center text-zinc-350"
      >
        Previous
      </button>
    );
  }
};

export default Button;
