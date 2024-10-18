import Button from "../ui/Button";
import Input from "../ui/Input";

type FillPersonalInfoProps = {
  goBackTo?: () => void;
  goTo?: () => void;
  name?: string;
  setName?: (name: string) => void;
  email?: string;
  setEmail?: (email: string) => void;
};

const FillPersonalInfo = ({
  goBackTo,
  goTo,
  name,
  setName,
  email,
  setEmail,
}: FillPersonalInfoProps) => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input
          label="Name"
          placeholder="John Doe"
          type="text"
          value={name}
          onChange={(e) => setName && setName(e.target.value)}
        />
        <Input
          label="Email"
          placeholder="johndoe@mail.com"
          type="email"
          value={email}
          onChange={(e) => setEmail && setEmail(e.target.value)}
        />
        <Input label="Password" placeholder="********" type="password" />
      </form>
      <div className="w-full flex justify-end">
        <Button goBackTo={goBackTo} type="previous" />
        <Button goTo={goTo} onClick={onSubmit} type="next" />
      </div>
    </div>
  );
};

export default FillPersonalInfo;
