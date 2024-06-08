import React from 'react';

export default function NhatHandleTabChange(){
    const [toggleTab, setToggleTab] = React.useState(0);
    const contents = [
        <p key={0}>
            The HyperText Markup Language or HTML is the standard markup language
            for documents designed to be displayed in a web browser.
        </p>,

        <p key={1}>
            Cascading Style Sheets is a style sheet language
            used for describing the presentation of a document written in a markup language such as HTML or XML.
        </p>,

        <p key={2}>
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
                        key={i}
                        className="me-2 inline-block px-4 py-3 rounded-lg text-white border-2 bg-blue-600  dark:hover:bg-red-800 dark:hover:text-white dark:hover:border-purple-800"
                        onClick={() => handleTabChange(i)}
                    >
                        {textTab[i]}
                    </li>
            ))}
      </ul>
      
      <div className="mt-5 text-left font-serif">{contents[toggleTab]}</div>
        </>
    )

  

}