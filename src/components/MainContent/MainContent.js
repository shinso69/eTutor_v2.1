import React, { useState } from "react";
import FadeInSection from "./FadeInSection";
import SliderSection from "./SliderSection";
import Form from "./Form/Form";

function MainContent() {
  const [present, setPresent] = useState(false);

  const isPresent = present ? "" : "present";
  const notPresent = present ? "present" : "";

  return (
    <main>
      <article id="inicio">
        <section id="hero">
          <h1>Tutoria de Inglés</h1>
          <h2>No esperes mas para avanzar en Inglés</h2>
          <button className="btn btn-transparent">Ponte en contacto</button>
        </section>
      </article>

      <article id="about">
        <FadeInSection>
          <h3>Nuestra Historia...</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            nostrum tempore amet illum laborum, cupiditate error eligendi nam
            minima repudiandae?
          </p>
        </FadeInSection>

        <FadeInSection>
          <h3>Tutor 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            quibusdam.
          </p>
        </FadeInSection>

        <FadeInSection>
          <h3>Tutor 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem,
            esse!
          </p>
        </FadeInSection>
      </article>

      <article id="servicios">
        <FadeInSection>
          <h2>Elevamos tu nivel de Inglés...</h2>
        </FadeInSection>

        <SliderSection present={isPresent}>
          <FadeInSection>
            <h3>Tareas y Trabajos</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              et cumque eveniet eos quas ducimus!
            </p>
          </FadeInSection>

          <FadeInSection>
            <h3>Examenes y Convocatorias</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              et cumque eveniet eos quas ducimus!
            </p>
          </FadeInSection>
        </SliderSection>

        <SliderSection present={notPresent}>
          <FadeInSection>
            <h3>Agilidad en el Dialogo</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              et cumque eveniet eos quas ducimus!
            </p>
          </FadeInSection>

          <FadeInSection>
            <h3>Pronunciación</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
              et cumque eveniet eos quas ducimus!
            </p>
          </FadeInSection>
        </SliderSection>

        <FadeInSection>
          <button
            className="btn btn-transparent"
            onClick={() => setPresent(!present)}
          >
            {present ? "volver" : "siguiente"}
          </button>
        </FadeInSection>
      </article>

      <article id="contact">
        <section>
          <h3>Ponte en Contacto..</h3>
          <p>Aqui puedes pedir nuestra ayuda o hacernos preuntas</p>
          <Form />
          <br />
          <p>Estamos a tu disposición!</p>
        </section>
      </article>
    </main>
  );
}

export default MainContent;
