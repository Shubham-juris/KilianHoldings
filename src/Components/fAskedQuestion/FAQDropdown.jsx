import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const faqs = [
    {
      question: "What types of services does Kilian Holdings offer?",
      answer:
        "Kilian Holdings provides comprehensive legal services including corporate law, intellectual property protection, contract drafting, and litigation support.",
    },
    {
      question: "How experienced is the team at Kilian Holdings?",
      answer:
        "Our team consists of seasoned legal professionals with over 50 years of combined experience across various legal domains, ensuring expert guidance for our clients.",
    },
    {
      question:
        "What sets Kilian Holdings apart from other legal service providers?",
      answer:
        "We distinguish ourselves through personalized client approach, cutting-edge legal strategies, transparent communication, and a proven track record of successful outcomes.",
    },
    {
      question: "How much do Kilian Holdings' services cost?",
      answer:
        "Our pricing is competitive and tailored to each client's specific needs. We offer flexible billing options including fixed rates, hourly billing, and custom packages.",
    },
    {
      question:
        "Is the information provided on Kilian Holdings' website considered legal advice?",
      answer:
        "No, the website content is for informational purposes only and does not constitute formal legal advice. Consulting directly with our attorneys is recommended for specific legal guidance.",
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div
      style={{ margin: "1rem auto" }}
      className="w-full max-w-2xl mx-auto p-4"
    >
      {faqs.map((faq, index) => (
        <div key={index} className="border-b last:border-b-0 border-gray-200">
          <button
            onClick={() => toggleDropdown(index)}
            className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-800">{faq.question}</span>
            {openDropdown === index ? (
              <ChevronUp className="text-gray-500" />
            ) : (
              <ChevronDown className="text-gray-500" />
            )}
          </button>
          {openDropdown === index && (
            <div className="p-4 bg-gray-50 text-gray-700">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQDropdown;
