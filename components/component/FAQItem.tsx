"use client"

import { useState } from 'react';

interface FaqItemProps {
    question: string;
    answer: string;
  }

  const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-white/30">
      <div className="flex justify-between items-center p-4 cursor-pointer text-white" onClick={toggleAnswer}>
        <div className='font-bold'>{question}</div>
        <div>{isOpen ? '▲' : '▼'}</div>
      </div>
      {isOpen && <div className="p-4 text-white font-thin">{answer}</div>}
    </div>
  );
};

export default FaqItem;
