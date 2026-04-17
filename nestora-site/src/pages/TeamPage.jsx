import { Users } from "lucide-react";
import Reveal from "../components/Reveal";
import Founders from "../components/Founders";
import BlurText from "../components/BlurText";
import { Helmet } from "react-helmet-async";
import "./TeamPage.css";

function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Meet the Team - Nestora</title>
        <meta
          name="description"
          content="Meet the visionaries behind Nestora."
        />
      </Helmet>

      <div className="team-page-wrap">
        <section className="team-hero-shell">
          <div className="team-orb team-orb-left" />
          <div className="team-orb team-orb-right" />

          <div className="team-content-layer">
            <Reveal>
              <div className="team-headline-block">
                <div className="team-eyebrow-pill">
                  <Users size={14} />
                  <span>The Core Team</span>
                </div>

                <h1 className="team-main-title">
                  <BlurText text="Minds Behind" animateBy="words" />{" "}
                  <span className="team-brand-highlight">
                    Nestora
                  </span>
                </h1>

                <p className="team-subtitle-text">
                  We are operators, builders, and technologists crafting the future of
                  neighbourhood retail through trusted hyperlocal commerce.
                </p>
              </div>
            </Reveal>

            <Founders
              hideHeader
              sectionClassName="team-founders-section"
              containerClassName="team-founders-container"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default TeamPage;