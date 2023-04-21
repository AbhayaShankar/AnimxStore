import React from "react";
import "./PrivacyPolicy.scss";
import privacy from "../../assets/privacy1.jpg";

const PrivacyPolicy = () => {
  return (
    <div className="privacy__main">
      <div className="privacy__bg__img">
        <img src={privacy} alt="" />
      </div>
      <h1 className="privacy__heading">Privacy Policy</h1>
      <div className="privacy__content">
        <p>
          Welcome to Anim-x-store, where we value your privacy as much as we
          value your money. We know you're probably too busy binge-watching your
          favorite anime series to read this, but please bear with us.
        </p>
        <ul>
          <li>
            <strong>First things first:</strong> we promise to collect and use
            your personal information in ways that will make your parents proud.
            Just kidding! We'll sell your data to the highest bidder, because
            who needs privacy when you can get some extra cash? And if you don't
            want that then we will have that.{" "}
          </li>
          <li>
            <strong>Rest assured </strong> that we'll use state-of-the-art
            encryption to protect your data from prying eyes. Well, unless the
            hackers are really determined - then we'll just throw up our hands
            and pretend like we didn't see anything.
          </li>
          <li>
            If you're not comfortable with us tracking your every move,{" "}
            <strong>tough luck</strong>. We need to know what you're buying and
            when, so we can bombard you with even more anime products you don't
            need. But hey, at least our ads will be highly personalized, right?
          </li>

          <li>
            <strong> And finally</strong>, if the government comes knocking on
            our door asking for your information, we promise to give them a good
            laugh before handing it over. Because if there's one thing we love
            more than anime, it's complying with legal requests.
          </li>
        </ul>
        <p className="privacy__end">
          So there you have it, folks. Our privacy policy in a nutshell. Now go
          ahead and click that "accept" button. We promise not to read your mind
          (at least, not yet).
        </p>
        <br />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
