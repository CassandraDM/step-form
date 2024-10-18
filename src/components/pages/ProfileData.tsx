import { useNavigate } from "react-router-dom";
import Form from "../ui/Form";

const ProfileData = () => {
  const navigate = useNavigate();

  const goToPersonalInfo = () => {
    navigate("/personal-info");
  };

  const goToFormSubmitted = () => {
    navigate("/form-submitted");
  };

  return <Form goTo={goToFormSubmitted} goBackTo={goToPersonalInfo} />;
};

export default ProfileData;
