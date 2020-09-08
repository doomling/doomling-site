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
            Soy desarrolladora fullstack y diseñadora UI. Me gusta emprender,
            solucionar problemas y contar historias. Actualmente formo parte de{" "}
            <a href="https://www.courseit.com.ar" target="_blank">
              CourseIt
            </a>{" "}
            la mejor opción para aprender desarrollo web en español.
          </p>
          <p>
            En mi escaso tiempo libre hago{" "}
            <a href="https://teloexplicocongatitos.com/" target="_blank">
              #TeLoExplicoConGatitos
            </a>
            , una serie de cheatsheets con conceptos complejos explicados de
            forma simple para que cada vez más personas se animen a meterse en
            el mundo de la tecnología.
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
              <a
                href="https://open.spotify.com/show/40vVHnRwYqihg2raORQuxU"
                target="_blank"
              >
                <FontAwesomeIcon icon={fab.faSpotify} />
              </a>
            </div>
          </div>
        </Section>

        <section className={style.spikes}></section>
        <Section shiny={true} title="Un poco más sobre mi">
          <div className={style.flex}>
            <div>
              <h2>
                También me gusta mucho animar personajes en CSS, tengo un{" "}
                <a
                  href="https://open.spotify.com/show/40vVHnRwYqihg2raORQuxU"
                  target="_blank"
                >
                  podcast
                </a>
                , y a veces{" "}
                <a href="https://dev.to/iamdoomling/" target="_blank">
                  escribo
                </a>
                .<i class="fas fa-long-arrow-alt-right"></i>
                <br />
                <br />
                ¿Querés contactarme?
              </h2>
              <p>
                Podés hacerlo en mis redes o por mail:
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
