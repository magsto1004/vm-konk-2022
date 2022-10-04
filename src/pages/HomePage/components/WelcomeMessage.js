import React from "react";

const WelcomeMessage = () => {
  return (
    <div className="w-[75%] h-screen mx-auto md:mx-0 md:ml-auto bg-[#56042C] text-white">
      <div className="max-w-[800px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Velkommen til</p>
        <h1 className="text-4xl sm:text-7xl font-bold">VM Konk 2022!</h1>
        <h2 className="text-4xl sm:text-7xl font-bold">
          Klar til å komme i gang?
        </h2>
        <p className="py-4 max-w-[700px]">
          Hopp over til "innlevering" og begynn å fylle inn bongen din! Under
          "info" finner du nyttig informasjon som kan være til hjelp når du skal
          levere seiersbongen, men husk å lagre før du hopper mellom sidene!
          Lykke til!
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
