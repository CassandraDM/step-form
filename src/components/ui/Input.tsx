type InputProps = {
  label: string;
  type: "text" | "password" | "email" | "number";
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ label, type, placeholder, value, onChange }: InputProps) => {
  return (
    <div className=" flex flex-col gap-2 pb-8">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-[416px] h-[38px] rounded bg-zinc-100 placeholder:text-zinc-350  py-2 px-4"
      />
    </div>
  );
};

export default Input;
