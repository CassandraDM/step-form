import Button from "../ui/Button";
import Input from "../ui/Input";

type FillProfileDataProps = {
  goBackTo?: () => void;
  goTo?: () => void;
};

const FillProfileData = ({ goBackTo, goTo }: FillProfileDataProps) => {
  return (
    <div>
      <form>
        <Input label="Age" placeholder="25" type="number" />
        <Input label="Area of interest" placeholder="Frontend" type="text" />
        <Input label="Bio / Dscription" placeholder="Lorem ipsum" type="text" />
      </form>
      <div className="w-full flex justify-end">
        <Button goBackTo={goBackTo} type="previous" />
        <Button goTo={goTo} type="next" />
      </div>
    </div>
  );
};

export default FillProfileData;
