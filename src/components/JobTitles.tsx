"use client"
import React, { useState, useEffect } from 'react';

const JobTitles = () => {
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
 
  const typingSpeed = 80;        
  const deletingSpeed = 50;      
  const pauseBeforeDelete = 2000; 
  const pauseBeforeNextTitle = 700; 
  
  const titles = React.useMemo(() => [
    'SOFTWARE DEVELOPER',
    'FRONT-END DEVELOPER',
    'WEB DEVELOPER',
    'FULL-STACK DEVELOPER',
    'SOFTWARE ENGINEER',
  ], []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentTitle = titles[titleIndex];
    
    const typeText = () => {
      if (displayText !== currentTitle) {
        timer = setTimeout(() => {
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBeforeDelete);
      }
    };
    
    const deleteText = () => {
      if (displayText !== '') {
        timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
         
          console.log(`Moving to next title index: ${(titleIndex + 1) % titles.length}`);
        }, pauseBeforeNextTitle);
      }
    };
    
    if (!isDeleting) {
      typeText();
    } else {
      deleteText();
    }
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, titles]);

  return (
    <div className="h-16 flex items-center justify-center">
      <div className="text-lg sm:text-xl md:text-xl lg:text-2xl font-medium text-center">
        {displayText}<span className="animate-pulse">|</span>
      </div>
    </div>
  );
};

export default JobTitles;