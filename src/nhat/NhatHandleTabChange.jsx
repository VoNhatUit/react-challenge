import React, { useState } from 'react';

export default function NhatHandleTabChange(){
    const [toggleTab, setToggleTab] = React.useState(1);
    const contents = [
        <p key={1}>
            The HyperText Markup Language or HTML is the standard markup language
            for documents designed to be displayed in a web browser.
        </p>,

        <p key={2}>
            Cascading Style Sheets is a style sheet language
            used for describing the presentation of a document written in a markup language such as HTML or XML.
        </p>,

        <p key={3}>
            JavaScript, often abbreviated as JS, is a programming language 
            that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
        </p>,
      ];
    const textTab = ["HTML", "CSS", "JavaScript"];
    
    const handleTabChange = (tabId) => {
    setToggleTab(tabId);
      };
    return (
        <>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                
                {[...Array(3)].map((_, i) => (
                    
                    <li 
                        key={i + 1}
                        className="me-2 inline-block px-4 py-3 rounded-lg text-gray-700 border-2 border-black  dark:hover:bg-purple-800 dark:hover:text-white dark:hover:border-purple-800"
                        onClick={() => handleTabChange(i + 1)}
                    >
                        {textTab[i]}
                    </li>
            ))}
      </ul>
      
      <div className="mt-5 text-left font-serif">{contents[toggleTab - 1]}</div>
        </>
    )
}