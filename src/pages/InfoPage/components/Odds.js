import React from "react";
import OddsElement from "./OddsElement";

const Odds = () => {
  return (
    <div className="bg-pink-100 rounded-2xl">
      <div>
        <p className="text-2xl font-bold inline px-2">
          Odds
        </p>
      </div>
      <table className="w-[100%] ">
        <thead>
          <tr>
            <th className="text-left p-2 text-sm w-[5%]">RK</th>
            <th className="text-left p-2 text-sm w-[15%]">Lag</th>
            <th className="text-center p-2 text-sm w-[8%]">Bet365</th>
            <th className="text-center p-2 text-sm w-[8%]">SkyBet</th>
            <th className="text-center p-2 text-sm w-[8%]">PaddyPower</th>
            <th className="text-center p-2 text-sm w-[8%]">William Hill</th>
            <th className="text-center p-2 text-sm w-[8%]">888Sport</th>
            <th className="text-center p-2 text-sm w-[8%]">Betfair</th>
            <th className="text-center p-2 text-sm w-[8%]">Betvictor</th>
            <th className="text-center p-2 text-sm w-[8%]">Coral</th>
            <th className="text-center p-2 text-sm w-[8%]">Unibet</th>
            <th className="text-center p-2 text-sm w-[8%]">SpreadEx</th>
          </tr>
        </thead>
        <tbody>
          <OddsElement
            rank="1"
            team="Brasil"
            bet365="4"
            skybet="9/2"
            paddypower="4"
            williamhill="4"
            sport888="4"
            betfair="4"
            betvictor="4"
            coral="9/2"
            unibet="4"
            spreadex="4"
          />
          <OddsElement
            rank="2"
            team="Frankrike"
            bet365="6"
            skybet="5"
            paddypower="11/2"
            williamhill="6"
            sport888="11/2"
            betfair="11/2"
            betvictor="13/2"
            coral="6"
            unibet="13/2"
            spreadex="11/2"
          />
          <OddsElement
            rank="3"
            team="Argentina"
            bet365="7"
            skybet="7"
            paddypower="13/2"
            williamhill="7"
            sport888="13/2"
            betfair="13/2"
            betvictor="13/2"
            coral="7"
            unibet="13/2"
            spreadex="13/2"
          />
          <OddsElement
            rank="4"
            team="England"
            bet365="7"
            skybet="13/2"
            paddypower="13/2"
            williamhill="7"
            sport888="13/2"
            betfair="13/2"
            betvictor="7"
            coral="7"
            unibet="17/2"
            spreadex="7"
          />
          <OddsElement
            rank="5"
            team="Spania"
            bet365="8"
            skybet="8"
            paddypower="15/2"
            williamhill="8"
            sport888="15/2"
            betfair="15/2"
            betvictor="8"
            coral="15/2"
            unibet="9"
            spreadex="15/2"
          />
          <OddsElement
            rank="6"
            team="Tyskland"
            bet365="10"
            skybet="9"
            paddypower="9"
            williamhill="10"
            sport888="9"
            betfair="9"
            betvictor="10"
            coral="10"
            unibet="11"
            spreadex="9"
          />
          <OddsElement
            rank="7"
            team="Nederland"
            bet365="12"
            skybet="12"
            paddypower="12"
            williamhill="14"
            sport888="12"
            betfair="12"
            betvictor="14"
            coral="12"
            unibet="13"
            spreadex="10"
          />
          <OddsElement
            rank="8"
            team="Portugal"
            bet365="12"
            skybet="14"
            paddypower="12"
            williamhill="12"
            sport888="12"
            betfair="12"
            betvictor="12"
            coral="12"
            unibet="15"
            spreadex="13"
          />
          <OddsElement
            rank="9"
            team="Belgia"
            bet365="14"
            skybet="14"
            paddypower="11"
            williamhill="12"
            sport888="11"
            betfair="11"
            betvictor="16"
            coral="10"
            unibet="17"
            spreadex="14"
          />
          <OddsElement
            rank="10"
            team="Danmark"
            bet365="28"
            skybet="28"
            paddypower="30"
            williamhill="28"
            sport888="30"
            betfair="30"
            betvictor="33"
            coral="25"
            unibet="33"
            spreadex="35"
          />
          <OddsElement
            rank="11"
            team="Kroatia"
            bet365="50"
            skybet="50"
            paddypower="45"
            williamhill="50"
            sport888="45"
            betfair="45"
            betvictor="50"
            coral="50"
            unibet="40"
            spreadex="40"
          />
          <OddsElement
            rank="12"
            team="Uruguay"
            bet365="50"
            skybet="40"
            paddypower="45"
            williamhill="50"
            sport888="45"
            betfair="45"
            betvictor="50"
            coral="40"
            unibet="50"
            spreadex="50"
          />
          <OddsElement
            rank="13"
            team="Senegal"
            bet365="80"
            skybet="80"
            paddypower="90"
            williamhill="80"
            sport888="90"
            betfair="90"
            betvictor="80"
            coral="50"
            unibet="100"
            spreadex="70"
          />
          <OddsElement
            rank="14"
            team="Serbia"
            bet365="80"
            skybet="100"
            paddypower="100"
            williamhill="100"
            sport888="100"
            betfair="100"
            betvictor="100"
            coral="80"
            unibet="70"
            spreadex="100"
          />
          <OddsElement
            rank="15"
            team="Sveits"
            bet365="80"
            skybet="66"
            paddypower="80"
            williamhill="80"
            sport888="80"
            betfair="80"
            betvictor="80"
            coral="66"
            unibet="100"
            spreadex="100"
          />
          <OddsElement
            rank="16"
            team="Mexico"
            bet365="150"
            skybet="80"
            paddypower="100"
            williamhill="100"
            sport888="100"
            betfair="100"
            betvictor="125"
            coral="100"
            unibet="150"
            spreadex="175"
          />
          <OddsElement
            rank="17"
            team="Polen"
            bet365="125"
            skybet="150"
            paddypower="100"
            williamhill="100"
            sport888="100"
            betfair="100"
            betvictor="150"
            coral="100"
            unibet="200"
            spreadex="175"
          />
          <OddsElement
            rank="18"
            team="USA"
            bet365="100"
            skybet="150"
            paddypower="100"
            williamhill="100"
            sport888="100"
            betfair="100"
            betvictor="100"
            coral="100"
            unibet="200"
            spreadex="200"
          />
          <OddsElement
            rank="19"
            team="Wales"
            bet365="150"
            skybet="100"
            paddypower="150"
            williamhill="100"
            sport888="150"
            betfair="150"
            betvictor="150"
            coral="150"
            unibet="250"
            spreadex="250"
          />
          <OddsElement
            rank="20"
            team="Ecuador"
            bet365="150"
            skybet="150"
            paddypower="125"
            williamhill="150"
            sport888="125"
            betfair="125"
            betvictor="150"
            coral="150"
            unibet="250"
            spreadex="250"
          />
          <OddsElement
            rank="21"
            team="Kamerun"
            bet365="250"
            skybet="250"
            paddypower="250"
            williamhill="250"
            sport888="250"
            betfair="250"
            betvictor="200"
            coral="150"
            unibet="400"
            spreadex="300"
          />
          <OddsElement
            rank="22"
            team="Qatar"
            bet365="250"
            skybet="500"
            paddypower="250"
            williamhill="250"
            sport888="250"
            betfair="250"
            betvictor="200"
            coral="200"
            unibet="400"
            spreadex="400"
          />
          <OddsElement
            rank="23"
            team="Ghana"
            bet365="250"
            skybet="250"
            paddypower="250"
            williamhill="150"
            sport888="250"
            betfair="250"
            betvictor="300"
            coral="200"
            unibet="400"
            spreadex="300"
          />
          <OddsElement
            rank="24"
            team="Marokko"
            bet365="200"
            skybet="250"
            paddypower="200"
            williamhill="200"
            sport888="200"
            betfair="200"
            betvictor="150"
            coral="150"
            unibet="300"
            spreadex="250"
          />
          <OddsElement
            rank="25"
            team="Japan"
            bet365="250"
            skybet="250"
            paddypower="250"
            williamhill="250"
            sport888="250"
            betfair="250"
            betvictor="150"
            coral="200"
            unibet="200"
            spreadex="300"
          />
          <OddsElement
            rank="26"
            team="S??r-Korea"
            bet365="250"
            skybet="250"
            paddypower="250"
            williamhill="250"
            sport888="250"
            betfair="250"
            betvictor="400"
            coral="200"
            unibet="350"
            spreadex="300"
          />
          <OddsElement
            rank="27"
            team="Canada"
            bet365="150"
            skybet="500"
            paddypower="200"
            williamhill="250"
            sport888="200"
            betfair="200"
            betvictor="150"
            coral="200"
            unibet="300"
            spreadex="500"
          />
          <OddsElement
            rank="28"
            team="Australia"
            bet365="250"
            skybet="500"
            paddypower="425"
            williamhill="400"
            sport888="400"
            betfair="425"
            betvictor="250"
            coral="250"
            unibet="750"
            spreadex="500"
          />
          <OddsElement
            rank="29"
            team="Iran"
            bet365="500"
            skybet="500"
            paddypower="500"
            williamhill="500"
            sport888="500"
            betfair="500"
            betvictor="750"
            coral="500"
            unibet="750"
            spreadex="500"
          />
          <OddsElement
            rank="30"
            team="Tunisia"
            bet365="350"
            skybet="500"
            paddypower="425"
            williamhill="300"
            sport888="400"
            betfair="425"
            betvictor="300"
            coral="250"
            unibet="750"
            spreadex="500"
          />
          <OddsElement
            rank="31"
            team="Saudi Arabia"
            bet365="750"
            skybet="750"
            paddypower="500"
            williamhill="500"
            sport888="500"
            betfair="500"
            betvictor="750"
            coral="500"
            unibet="1000"
            spreadex="750"
          />
          <OddsElement
            rank="32"
            team="Costa Rica"
            bet365="750"
            skybet="750"
            paddypower="500"
            williamhill="500"
            sport888="500"
            betfair="500"
            betvictor="1000"
            coral="300"
            unibet="750"
            spreadex="750"
          />
        </tbody>
      </table>
    </div>
  );
};

export default Odds;
