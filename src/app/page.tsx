import InputForm from "./_component/Form/InputForm";
import MyContainer from "./_component/MyContainer/MyContainer";

export default function Home() {
  return (
    <MyContainer>
      <h1 className="md:mt-10 mt-7">Give your information...</h1>
      <InputForm />
    </MyContainer>
  );
}

// Name
// email
// phone number
// Address
// Option to upload either a CV or multiple file documents .
