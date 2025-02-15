import Card from "./Card";
import { faArrowDownDark, faExclamation } from "../assets";
import FormComponent from "./Form";

const Instruction = () => {
  return (
    <div className="mt-[50px] flex justify-center flex-col items-center">
      <h2 className="text-center font-medium text-5xl">How it Works?</h2>
      <div className="flex justify-center flex-col items-center gap-[25px] mt-[70px] w-full max-w-[720px]">
        <Card>
          <h3 className="font-medium text-2xl">
            1. Enter Your Name & Phone Number 📝
          </h3>
          <p className="text-xl">
            I’ll use your details to generate a unique
            <span className="text-[#008F0A] font-medium"> referral link </span>
            for you, so you can register and claim your rewards.
          </p>
          <FormComponent />
        </Card>
        <img src={faArrowDownDark} alt="" />
        <Card>
          <h3 className="font-medium text-2xl">
            2. Get Your Link via Email & Register wallet 📩
          </h3>
          <p className="text-xl">
            I’ll send you a link to{" "}
            <span className="text-[#008F0A] font-medium">
              download the app{" "}
            </span>
            and register with your referral code. Just sign up and{" "}
            <span className="text-[#008F0A] font-bold">enter the code </span>
            in the app settings.
          </p>
          <div className="flex items-center gap-[15px] mt-[20px] p-4 bg-white rounded-lg shadow-md">
            <div className="">
              <img src={faExclamation} alt="" className="w-[30px] h-[30px]" />
            </div>
            <div className="text-xl ">
              Without using my referral, you will receive a smaller reward.
            </div>
          </div>
        </Card>
        <img src={faArrowDownDark} alt="" />

        <Card>
          <h3 className="font-medium text-2xl">
            3. Claim Your Coffee & Crypto 🎉
          </h3>
          <p className="text-xl">
            Verify your identity online with a document or in person at a
            verification point (can be found in app). Once verified, get your
            free ☕ & 💰50 USD.
          </p>
          <div className="mt-[0px] bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-medium text-lg">Get rewarded with:</h4>
            <div className="flex justify-between text-[20px] gap-[20px] w-full mt-[10px]">
              <div className="">
                <span>💰</span>
                <span>
                  43.3 WLD ~{" "}
                  <span className="text-[#008F0A] font-medium">225.53 PLN</span>
                </span>
              </div>
              <div className="">
                <span>☕</span>
                <span>Free cup of coffee</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Instruction;
