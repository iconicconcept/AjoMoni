"use client"

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is Ajo Moni?',
    answer: 'Ajo Moni is a digital platform that lets you save money in trusted groups just like traditional ajo, but more secure, transparent, and easy to manage from your phone.'
  },
  {
    question: 'How does turn-by-turn savings work?',
    answer: 'No hidden fees! We believe in transparency. All our fees are clearly stated upfront, with many services offered at zero cost to our users.'
  },
  {
    question: 'How quickly can I transfer money?',
    answer: 'Most transfers are instant! Bank transfers within Nigeria are processed immediately, while international transfers may take 1-3 business days.'
  },
  {
    question: 'Can I start my own Ajo group?',
    answer: 'Absolutely! We offer comprehensive business banking solutions including bulk payments, invoicing, expense management, and dedicated business support.'
  },
  {
    question: 'How do I join an existing group?',
    answer: 'You can join by registering with your desired and the most trusted group listed on platform.'
  },
  {
    question: 'What happens if someone misses a payment?',
    answer: 'Our customer support team is available 24/7 through in-app chat, phone, and email. We also have a comprehensive help center with guides and tutorials.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-fintech-surface mx-auto py-8 pb-13 lg:pb-20">
      <div className="flex flex-col justify-center items-center lg:flex-row gap-9 lg:gap-9 max-w-500 mx-auto px-4 lg:px-14 w-full h-full">

        {/* first box */}
        <div className="container-fintech lg:w-[60%]">
          <div className="text-center lg:text-start mb-10 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-950 mb-3">
              Got Questions? <br></br>We&apos;ve Got Answers
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-lg">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-fintech-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* second box */}
        <div className="lg:w-[30%] flex justify-center items-center">
          <div className="border rounded-[3px] border-gray-500 flex flex-col justify-center items-center gap-5 lg:gap-9 px-5 lg:p-6 p-6 lg:p-3">
            <img src="/shape.png" alt="vector" className="h-12 w-12" />
            <h3 className="text-[17px] font-bold text-center leading-tighter">Do you have more questions?</h3>
            <p className="text-[15px] font-normal text-center leading-tighter">Turn-by-turn savings, payouts, and group tracking — all in one app. <br></br> Meet the platform built for how Nigerians actually save.</p>
            <button className="bg-[#57B524] rounded-full px-5 cursor-pointer hover:text-[#57B524] hover:bg-transparent hover:border-1 border:border-[#57B524] py-1.5 text-white">Send us a mail</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
