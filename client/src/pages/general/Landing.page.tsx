import { useNavigate } from "react-router-dom";
import "../../styles/Landing/LandingPage.css";
import { useLightModeOn } from "../../hooks/useLightModeOn";
import useCheckCookieAndRedirect from "../../hooks/useCheckCookieAndRedirect";
const LandingPage = () => {
  useLightModeOn();
  const navigate = useNavigate();
  useCheckCookieAndRedirect(false)

  return (
    <div className="landing-container">
      <header>
        <h1>Hyper Ninja</h1>
        <p>
          A Groundbreaking App, engineered to Keep your Server, ready and
          Delay-Free.
        </p>
        <p>
          Say farewell to server sleeping and embrace uninterrupted performance
          with ease.
        </p>

        <div className="btns-container">
          <a href="#body">
            <button>Learn More</button>
          </a>
          <a href="https://www.youtube.com/watch?v=CO38MX2k4ss" target="_blank"><button>Demo</button></a> 
          <button onClick={() => navigate("/register")}>Register</button>
        </div>
      </header>
      <div className="body" id="body">
        <div className="gap" />

        <div className="paragraph">
          <h2>Hyper Ninja at a Glance:</h2>
          <div>
            Imagine a world where your deployed servers remain active and
            responsive , regardless of the deployment service you use. Hyper
            Ninja makes this a reality. With just a few simple steps, you can
            ensure all your servers stay awake and vigilant, serving your users
            with minimal delays.
          </div>
        </div>
        <div className="gap" />
        <div className="paragraph">
          <h2> How Hyper Ninja Works:</h2>
          <div>
            Intuitive Dashboard: Hyper Ninja boasts a user-friendly interface
            that allows you to effortlessly register your servers. Once
            registered, they are in the capable hands of Hyper Ninja,
            <b> ensuring they stay up and running.</b>
          </div>
        </div>
        <div className="gap" />
        <div className="paragraph">
          <h2>Seamless Uptime:</h2>
          <div>
            <b>
              As long as Hyper Ninja remains open in your browser and Logged in,
            </b>
            your registered servers will be kept ACTIVE, minimizing the risk of
            downtime and guaranteeing a fast & smooth online presence.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
