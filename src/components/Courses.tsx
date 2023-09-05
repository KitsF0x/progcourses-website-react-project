import React from "react";
import Course from "./Course";

const Courses = () => {
  return (
    <section
      className="section-container courses-hero-img height-100-vh"
      id="courses"
    >
      <h1>Kursy</h1>
      <div className="section-content course-container">
        <Course
          title="C i same plusy"
          titleHighlighted="C"
          description="Poznaj podstawy języka C++ używanego wszędzie tam gdzie wydajność jest najważniejsza."
          level="Zaawansowany"
          price="499"
        />
        <Course
          title="Aplikacje backendowe z językiem PHP"
          titleHighlighted="PHP"
          description="Naucz się pisać aplikacje internetowe z użyciem języka PHP oraz bazą danych MySQL."
          level="Średniozaawansowany"
          price="249"
        />
        <Course
          title="HTML&CSS - Projektowanie stron internetowych"
          titleHighlighted="HTML&CSS"
          description="Naucz się projektować rozbudowane strony internetowe dzięki językowi HTML oraz bądź mistrzem w ich stylizacji!"
          level="Podstawowy"
          price="199"
        />
      </div>
      <div className="section-content course-container">
        <Course
          title="JAVA - Programowanie obiektowe"
          titleHighlighted="JAVA"
          description="Okiełznaj świat programowania obiektowego na przykładzie języka JAVA!"
          level="Średniozaawansowany"
          price="349"
        />
        <Course
          title="Świat aplikacji okienkowych z C#"
          titleHighlighted="C#"
          description="Poznaj tajniki tworzenia aplikacji desktopowych z językiem C#."
          level="Średniozaawansowany"
          price="249"
        />
        <Course
          title="Osdev w trybie rzeczywistym x86"
          titleHighlighted="Osdev"
          description="Wejdź do świata jednego z najtrudniejszych programistycznych hobby - pisania własnych systemów operacyjnych."
          level="Zaawansowany"
          price="899"
        />
      </div>
      <p className="little-text">
        Na każdy kurs przysługuje prawo zwrotu do 30 dni
      </p>
      <div className="courses-hero-shadow"></div>
    </section>
  );
};

export default Courses;
