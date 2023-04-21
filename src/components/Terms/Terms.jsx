import React from "react";
import "./Terms.scss";
import terms from "../../assets/terms.jpg";

const Terms = () => {
  return (
    <div className="terms__main">
      <div className="terms__bg__img">
        <img src={terms} alt="" />
      </div>
      <h1 className="terms__heading">Terms and Conditions</h1>
      <div className="terms__content">
        <p>
          Welcome to Anim-x-store, the place where the magic happens! Before you
          start browsing, though, we need to go over some boring legal stuff.
          Don't worry, we'll try to keep it entertaining.
        </p>
        <ul>
          <li>
            <strong>First things first:</strong> by using our website, you agree
            to let us stalk you online. We promise we won't show up at your
            doorstep uninvited (unless you have some really cool anime stuff we
            want to see), but we'll definitely be tracking your every move. Why?
            Because data is power, baby.{" "}
          </li>
          <li>
            Next up,
            <strong> let's talk about payment </strong> . When you buy something
            from us, you agree to give us your firstborn child. Just kidding!
            We're not that evil (yet). But we will need your credit card
            information, and we promise we'll only use it for good (like buying
            more anime merchandise).
          </li>
          <li>
            Speaking of <strong> merchandise </strong>, we reserve the right to
            sell you stuff that's cursed, haunted, or otherwise possessed. Just
            think of it as an added bonus - you never know what kind of
            adventure you'll have with our products!
          </li>

          <li>
            Now, onto the <strong> boring stuff </strong>. We can't guarantee
            that our website will be error-free or that our products will always
            be available. Hey, we're only human (well, some of us might be anime
            characters, but you get the point).
          </li>
          <li>
            And finally, if you decide to sue us (which we hope you won't), you
            agree to let us choose the venue - and we choose the middle of a
            crowded anime convention. <strong> Bring your cosplay!</strong>
          </li>
        </ul>
        <p className="privacy__end">
          So there you have it, folks. Our terms and conditions. By using our
          website, you agree to all of the above. Now go forth and shop to your
          heart's content!
        </p>
        <br />
      </div>
    </div>
  );
};

export default Terms;
