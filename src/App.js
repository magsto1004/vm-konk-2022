import HomepageContainer from "./pages/HomePage/HomepageContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import InfoPageContainer from "./pages/InfoPage/InfoPageContainer";
import TeamPageContainer from "./pages/TeamPage/TeamPageContainer"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageContainer />} />
        <Route path="info" element={<InfoPageContainer />} />
        <Route path="info/argentina" element={<TeamPageContainer />} />
        <Route path="info/brasil" element={<TeamPageContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
