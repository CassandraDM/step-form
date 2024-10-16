import { useNavigate } from "react-router-dom";

export const AccountType = () => {
  const navigate = useNavigate();

  const goToPersonalInfoPage = () => {
    navigate("/personal-info");
  };

  return (
    <div>
      <div>
        <div>
          <h1>Registration Form</h1>
          <p>Please fill out this form with the required information</p>
        </div>
        <div>
          <div>
            <div>
              <p>1</p>
            </div>
            <div>
              <p>2</p>
            </div>
            <div>
              <p>3</p>
            </div>
          </div>
          <div>
            <div>
              <p>Account Type</p>
            </div>
            <div>
              <p>Personal Information</p>
            </div>
            <div>
              <p>Profile Data</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>Chose your account type</p>
        <div>
          <button>Personnal Account</button>
          <button>Business Account</button>
        </div>
      </div>
      <button onClick={goToPersonalInfoPage}>Next</button>
    </div>
  );
};

export default AccountType;
