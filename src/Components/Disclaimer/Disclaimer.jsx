import DisP from "./DisP";

const Disclaimer = () => {
  const str1 =
    "The information provided on this website is for general informational purposes only. All content, including text, graphics, and other material, is provided in good faith; however, we make no representation or warranty of any kind regarding its accuracy, adequacy, validity, reliability, or completeness.";
  const str2 =
    "Under no circumstances shall we be liable for any loss or damage incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and reliance on any information is solely at your own risk.";
  const str3 =
    "This website may contain links to external websites that are not provided, maintained, or affiliated with us in any way. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external sites.";
  const str4 =
    "The information on this site is not intended to be a substitute for professional advice. Always seek the advice of a qualified professional regarding any legal, financial, or health-related concerns. Never disregard professional advice because of something you have read on this website.";

  return (
    <div className="bg-blue-50 h-[750px]">
    <div
      className="w-[60%] mx-auto flex flex-col justify-self-center"
    >
      <h2 className="text-[#0C3F40] text-left text-[2.5rem] font-semiboldr relative left-5" style={{marginBottom:"1em" , marginTop:"1em"}}>
       <b>Disclaimer</b>
      </h2>
      <div className="text-stone-600 text-[1.125rem] font-semilight p-2 text-left">
        <DisP text={str1} />
        <DisP text={str2} />
        <DisP text={str3} />
        <DisP text={str4} />
      </div>
      <h3 className="underline relative left-3.5" style={{marginTop:"2em"}}>LEARN MORE</h3>
    </div>
    </div>
  );
};
export default Disclaimer;
