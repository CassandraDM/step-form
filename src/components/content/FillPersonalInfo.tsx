import { useState } from "react";
import Button from "../ui/Button";

type FillPersonalInfoProps = {
  goBackTo?: () => void;
  goTo?: () => void;
};

const FillPersonalInfo = ({ goBackTo, goTo }: FillPersonalInfoProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
  };

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="johndoe@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="text" placeholder="********" />
        </div>
      </form>
      <div className="w-full flex justify-end">
        <Button goBackTo={goBackTo} type="previous" />
        <Button goTo={goTo} onClick={onSubmit} type="next" />
      </div>
    </div>
  );
};

export default FillPersonalInfo;
