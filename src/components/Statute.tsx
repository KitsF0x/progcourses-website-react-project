import React from "react";

const Statute = () => {
  const date = new Date();
  const dateStr = `${date.getDay()}.${
    (date.getMonth() + 1).toString().length == 1
      ? "0" + (date.getMonth() + 1).toString()
      : date.getMonth() + 1
  }.${date.getFullYear()}`;

  return (
    <section className="section-container" id="statute">
      <h1>Regulamin</h1>
      <p className="section-content">
        <div className="statute">
          <h1>Regulamin Serwisu PROCOURSES.pl</h1>

          <h2>1. Postanowienia ogólne</h2>
          <p>
            1.1. Niniejszy regulamin określa zasady korzystania z serwisu
            internetowego PROCOURSES.pl (dalej zwany "Serwisem").
          </p>
          <p>
            1.2. Serwis PROCOURSES.pl oferuje kursy z zakresu programowania i
            związanych z nim dziedzin.
          </p>

          <h2>2. Warunki korzystania z Serwisu</h2>
          <p>
            2.1. Korzystanie z Serwisu jest dobrowolne i bezpłatne, chyba że
            inaczej jest wskazane w opisie danego kursu.
          </p>
          <p>
            2.2. Użytkownik zobowiązuje się do przestrzegania obowiązującego
            prawa oraz zasad kultury internetowej podczas korzystania z Serwisu.
          </p>
          <p>
            2.3. Zakazane jest udostępnianie w Serwisie treści naruszających
            prawa autorskie, prawa własności intelektualnej lub treści
            zawierających treści obraźliwe, wulgarne lub niezgodne z prawem.
          </p>

          <h2>3. Rejestracja</h2>
          <p>
            3.1. Aby skorzystać z niektórych funkcji Serwisu, użytkownik może
            być zobowiązany do rejestracji.
          </p>
          <p>
            3.2. Podczas rejestracji użytkownik zobowiązuje się do podania
            prawdziwych danych kontaktowych i osobistych oraz do utrzymania ich
            w aktualności.
          </p>
          <p>
            3.3. Użytkownik ponosi odpowiedzialność za zabezpieczenie swojego
            konta przed dostępem osób nieuprawnionych.
          </p>

          <h2>4. Ochrona danych osobowych</h2>
          <p>
            4.1. Administrator Serwisu dba o ochronę danych osobowych
            użytkowników zgodnie z obowiązującymi przepisami prawa i polityką
            prywatności Serwisu.
          </p>
          <p>
            4.2. Użytkownik wyraża zgodę na przetwarzanie swoich danych
            osobowych zgodnie z polityką prywatności Serwisu.
          </p>

          <h2>5. Kursy</h2>
          <p>
            5.1. Serwis oferuje różnego rodzaju kursy programowania, dostępne za
            darmo lub odpłatnie.
          </p>
          <p>
            5.2. Warunki uczestnictwa w kursach odpłatnych określane są
            indywidualnie w opisach kursów.
          </p>

          <h2>6. Postanowienia końcowe</h2>
          <p>
            6.1. Serwis zastrzega sobie prawo do zmiany regulaminu w każdym
            czasie, informując użytkowników o zmianach na stronie głównej
            Serwisu.
          </p>
          <p>
            6.2. Użytkownik korzystający z Serwisu po wprowadzeniu zmian w
            regulaminie akceptuje te zmiany.
          </p>
          <p>
            6.3. W przypadku naruszenia postanowień regulaminu, Serwis zastrzega
            sobie prawo do zablokowania lub usunięcia konta użytkownika oraz
            podjęcia innych odpowiednich kroków.
          </p>
          <p>
            6.4. Wszelkie spory wynikające z korzystania z Serwisu będą
            rozstrzygane zgodnie z obowiązującym prawem.
          </p>

          <p>
            Działając zgodnie z powyższym regulaminem, zapewniamy bezpieczeństwo
            i komfort korzystania z Serwisu PROCOURSES.pl.
          </p>

          <p>Data ostatniej aktualizacji regulaminu: {dateStr}</p>
        </div>
      </p>
      <p className="little-text">Ten regulamin to atrapa</p>
    </section>
  );
};

export default Statute;
