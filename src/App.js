import HomepageContainer from "./pages/HomePage/HomepageContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InfoPageContainer from "./pages/InfoPage/InfoPageContainer";
import TeamPageContainer from "./pages/TeamPage/TeamPageContainer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageContainer />} />
        <Route path="info" element={<InfoPageContainer />} />
        <Route
          path="info/argentina"
          element={
            <TeamPageContainer
              team="Argentina"
              bio="Argentina er en av de virkelige favorittene foran årets mesterskap. Med en angrepsrekke som få kan matche, og en av historiens desidert beste spillere i Lionel Messi er det liten tvil om at dette er et lag å følge tett med på. De kommer rett fra en overbevisende seier i Copa America, den sør-amerikanske versjonen av EM, der de slo Brasil, en annen forhåndsfavoritt, i finalen, noe som burde være en god indikator på hva de kan få til i VM. Vil Messi klare å skaffe sitt andre internasjonale mesterskap når han må hamle opp med europeiske stormakter i tillegg?"
              prediction="Storfavoritt"
              primary="#43A1D5"
              secondary="#FFFFFF"
            />
          }
        />
        <Route
          path="info/brasil"
          element={
            <TeamPageContainer
              team="Brasil"
              bio="Ponk"
              prediction="Storfavoritt"
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
