
import Brands from "./Brands";

const SignUp = () => {
  const signUpTitles = {
    title: "You Don’t Need Any Credit To Get Started",
    title2: "Resellme allows you to buy and sell domains keeping the profits, all in under 5 minutes.",
    title3: "SIGN UP FOR FREE",
  };

  return (
    <>
      <div className="signUp">
        <div className="row outerSignUp">
          <div className="col-12 signUpItem">
            <div className="innerSignUp text-center">
              <h2>{signUpTitles.title}</h2>
              <p>{signUpTitles.title2}</p>
              <button className="btn btn-primary" aria-label="Sign up for free">
                {signUpTitles.title3}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Brands />
    </>
  );
};

export default SignUp;
