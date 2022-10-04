import React from "react";
import RankingElement from "./RankingElement";
import BRA from "../../../res/img/flags/BRA.png";
import BEL from "../../../res/img/flags/BEL.png";
import ARG from "../../../res/img/flags/ARG.png";
import FRA from "../../../res/img/flags/FRA.png";
import ENG from "../../../res/img/flags/ENG.png";
import ESP from "../../../res/img/flags/ESP.png";
import NED from "../../../res/img/flags/NED.png";
import POR from "../../../res/img/flags/POR.png";
import DEN from "../../../res/img/flags/DEN.png";
import GER from "../../../res/img/flags/GER.png";
import MEX from "../../../res/img/flags/MEX.png";
import URU from "../../../res/img/flags/URU.png";
import USA from "../../../res/img/flags/USA.png";
import CRO from "../../../res/img/flags/CRO.png";
import SUI from "../../../res/img/flags/SUI.png";
import SEN from "../../../res/img/flags/SEN.png";
import WAL from "../../../res/img/flags/WAL.png";
import QAT from "../../../res/img/flags/QAT.png";
import ECU from "../../../res/img/flags/ECU.png";
import KSA from "../../../res/img/flags/KSA.png";
import POL from "../../../res/img/flags/POL.png";
import AUS from "../../../res/img/flags/AUS.png";
import TUN from "../../../res/img/flags/TUN.png";
import CRC from "../../../res/img/flags/CRC.png";
import JPN from "../../../res/img/flags/JPN.png";
import CAN from "../../../res/img/flags/CAN.png";
import MAR from "../../../res/img/flags/MAR.png";
import SRB from "../../../res/img/flags/SRB.png";
import CMR from "../../../res/img/flags/CMR.png";
import GHA from "../../../res/img/flags/GHA.png";
import KOR from "../../../res/img/flags/KOR.png";

const Rankings = () => {
  return (
    <div className="bg-pink-100 rounded-2xl">
      <div>
        <p className="text-2xl font-bold inline px-2">Verdensranking</p>
      </div>
      <table className="w-[100%]">
        <thead>
          <tr>
            <th className="text-left p-2 text-sm">RK</th>
            <th className="text-left p-2 text-sm"></th>
            <th className="text-left p-2 text-sm">Lag</th>
            <th className="text-left p-2 text-sm">Poeng</th>
          </tr>
        </thead>
        <tbody>
          <RankingElement rank="1" flag={BRA} team="Brasil" points="1837.56" />
          <RankingElement rank="2" flag={BEL} team="Belgia" points="1821.92" />
            <RankingElement
              rank="3"
              flag={ARG}
              team="Argentina"
              points="1770.65"
            />
          <RankingElement
            rank="4"
            flag={FRA}
            team="Frankrike"
            points="1764.85"
          />
          <RankingElement rank="5" flag={ENG} team="England" points="1737.46" />
          <RankingElement rank="6" flag={ESP} team="Spania" points="1837.56" />
          <RankingElement
            rank="8"
            flag={NED}
            team="Nederland"
            points="1821.92"
          />
          <RankingElement
            rank="9"
            flag={POR}
            team="Portugal"
            points="1770.65"
          />
          <RankingElement
            rank="10"
            flag={DEN}
            team="Danmark"
            points="1764.85"
          />
          <RankingElement
            rank="11"
            flag={GER}
            team="Tyskland"
            points="1737.46"
          />
          <RankingElement rank="12" flag={MEX} team="Mexico" points="1837.56" />
          <RankingElement
            rank="13"
            flag={URU}
            team="Uruguay"
            points="1821.92"
          />
          <RankingElement rank="14" flag={USA} team="USA" points="1770.65" />
          <RankingElement
            rank="15"
            flag={CRO}
            team="Kroatia"
            points="1764.85"
          />
          <RankingElement rank="16" flag={SUI} team="Sveits" points="1737.46" />
          <RankingElement
            rank="18"
            flag={SEN}
            team="Senegal"
            points="1837.56"
          />
          <RankingElement rank="19" flag={WAL} team="Wales" points="1821.92" />
          <RankingElement rank="22" team="Iran" points="1770.65" />
          <RankingElement
            rank="23"
            flag={MAR}
            team="Marokko"
            points="1770.65"
          />
          <RankingElement rank="24" flag={JPN} team="Japan" points="1770.65" />
          <RankingElement rank="25" flag={SRB} team="Serbia" points="1770.65" />
          <RankingElement rank="26" flag={POL} team="Polen" points="1770.65" />
          <RankingElement
            rank="28"
            flag={KOR}
            team="Sør-Korea"
            points="1770.65"
          />
          <RankingElement
            rank="30"
            flag={TUN}
            team="Tunisia"
            points="1770.65"
          />
          <RankingElement
            rank="34"
            flag={CRC}
            team="Costa Rica"
            points="1770.65"
          />
          <RankingElement
            rank="38"
            flag={CMR}
            team="Kamerun"
            points="1770.65"
          />
          <RankingElement
            rank="39"
            flag={AUS}
            team="Australia"
            points="1770.65"
          />
          <RankingElement rank="43" flag={CAN} team="Canada" points="1770.65" />
          <RankingElement
            rank="44"
            flag={ECU}
            team="Ecuador"
            points="1770.65"
          />
          <RankingElement rank="48" flag={QAT} team="Qatar" points="1770.65" />
          <RankingElement
            rank="53"
            flag={KSA}
            team="Saudi Arabia"
            points="1770.65"
          />
          <RankingElement rank="60" flag={GHA} team="Ghana" points="1770.65" />
        </tbody>
      </table>
    </div>
  );
};

export default Rankings;
