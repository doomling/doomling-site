import React from "react";
import style from "./style.scss";
import Navbar from "../components/Nav";
import Section from "../components/Section";
import Mooncake from "../components/Mooncake";
import Spinel from "../components/Spinel";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faCat,
  faMagic,
  faEnvelope,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Section title="Un poco sobre mi">
          <h1>¡Hola! Mi nombre es Bel Rey</h1>
          <p>
            Soy desarrolladora frontend y diseñadora UI. Me gusta emprender,
            solucionar problemas y contar historias. Actualmente trabajo en{" "}
            <a href="https://www.courseit.com.ar" target="_blank">
              CourseIt.
            </a>
          </p>
          <div className={style.social}>
            <span>Encontrame en:</span>
            <div className={style.socialIcons}>
              <a href="https://www.twitter.com/iamdoomling" target="_blank">
                <FontAwesomeIcon icon={fab.faTwitter} />
              </a>
              <a href="https://www.github.com/doomling" target="_blank">
                <FontAwesomeIcon icon={fab.faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/belrey" target="_blank">
                <FontAwesomeIcon icon={fab.faLinkedin} />
              </a>
              <a href="https://www.codepen.io/iamdoomling" target="_blank">
                <FontAwesomeIcon icon={fab.faCodepen} />
              </a>
              <a href="https://www.behance.net/belrey" target="_blank">
                <FontAwesomeIcon icon={fab.faBehance} />
              </a>
            </div>
          </div>
        </Section>
        {/* <Section title="Algunas cosas que escribí">
          <div className={style.grid}>
            {[1, 2, 3, 4].map((item, i) => {
              return <CaseStudy title={item} key={i} />;
            })}
          </div>
        </Section> */}
        <section className={style.spikes}></section>
        <Section shiny={true} title="Un poco más sobre mi">
          <div className={style.flex}>
            <div>
              <h2>
                También me gusta mucho animar personajes en CSS{" "}
                <i class="fas fa-long-arrow-alt-right"></i>
                <br />
                <br />
                ¿Puedo ayudarte con algún proyecto?
              </h2>
              <p>
                Estoy tomando trabajos en modalidad freelance, si te interesa
                contratar mis servicios contactame:
                <a href="mailto: belenrey@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </p>
            </div>
            <Mooncake />
            <Spinel />
          </div>
        </Section>
      </div>
    );
  }
}

export default Index;
