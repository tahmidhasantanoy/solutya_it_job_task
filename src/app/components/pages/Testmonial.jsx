import React from "react";

const Testmonial = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-36 py-12 bg-gradient-to-b from-gray-50 to-white">
      <p className="max-w-3xl text-md xl:text-3xl md:text-2xl font-medium text-gray-800 mb-8">
        “ I really enjoy my work and it makes me more productive, happier and
        more successful. The cowering place builds confidence and inspires
        greater performance and greater success for both employees and
        employers.”
      </p>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <div className="text-left">
          <h4 className="text-gray-900 font-semibold">Karen Lynn</h4>
          <p className="text-gray-500 text-sm">Founder @ Company</p>
        </div>
      </div>
    </section>
  );
};

export default Testmonial;
