import DisP from "./DisP";

const Disclaimer = () => {
  const str1 =
    "The information provided on this website is for general informational purposes only. All content, including text, graphics, and other material, is provided in good faith; however, we make no representation or warranty of any kind regarding its accuracy, adequacy, validity, reliability, or completeness.";
  const str2 =
    "Under no circumstances shall we be liable for any loss or damage incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and reliance on any information is solely at your own risk.";
  const str3 =
    "This website may contain links to external websites that are not provided, maintained, or affiliated with us in any way. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external sites.";
  const str4 =
    "The information on this site is not intended to be a substitute for professional advice. Always seek the advice of a qualified professional regarding any paralegal, financial, or health-related concerns. Never disregard professional advice because of something you have read on this website.";

  return (
    <div className="bg-blue-50 w-full flex justify-center text-center px-4 py-8">
  <div className="w-full max-w-4xl flex flex-col items-center">
    <h2 className="text-[#0C3F40] text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 mt-2">
      <b>Disclaimer</b>
    </h2>

    <div className="text-stone-600 text-base sm:text-lg md:text-xl font-light space-y-4 px-2 sm:px-4">
      <DisP text={str1} />
      <DisP text={str2} />
      <DisP text={str3} />
      <DisP text={str4} />
    </div>

    <h3
      className="underline text-sm sm:text-base mt-6"
    >
      LEARN MORE
    </h3>
  </div>
</div>

  );
};
export default Disclaimer;
