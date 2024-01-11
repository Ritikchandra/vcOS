import React, {useState} from 'react'
import styles from "../ChatBox/ChatBox.module.css"
import bird from "../../assets/bird.png"
import arrow from "../../assets/arrow.png"
import deleteImage from "../../assets/delete.png"
import searchIcon from "../../assets/send.png"
import questionLogo from "../../assets/questionLogo.png"
import responseLogo from "../../assets/responseLogo.png"
import block from "../../assets/block.png"
    const ChatBox = ({ isSearched, onClearChat, onSearchIconClick }) => {
        const [userInput, setUserInput] = useState('');
        const [responseText, setResponseText] = useState('');
        const [isModalOpen, setModalOpen] = useState(true);
        const handleInputChange = (e) => {
            setUserInput(e.target.value);
          };
          const handleSearch = async () => {
            const apiKey = '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';
            const prompt = userInput;
        
            try {
              const response = await fetch('https://api.openai.com/v1/models/gpt-3.5-turbo-instruct', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                  prompt,
                  max_tokens: 100,
                }),
              });
        
              const responseData = await response.json();
              console.log('Response from GPT-3:', responseData);
    const choices = responseData.choices || [];
    setResponseText(choices.length > 0 ? choices[0]?.text : 'No response from GPT-3');
  } catch (error) {
    console.error('Error fetching data from GPT-3:', error);
    setResponseText('Error fetching response from GPT-3');
  }
          };
        
          const handleSearchIconClick = () => {
            handleSearch();
            onSearchIconClick();
          };
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleClearChat = () => {
    setModalOpen(true); // Open the modal when "Clear Chat" is clicked
  };

  const handleModalCloseYes = () => {
    setModalOpen(false); // Close the modal
    onClearChat(); // Perform the clear chat action
  };
  const handleModalCloseNo = () => {
    setModalOpen(false);
  };
  return (
    <>
        <div className={styles.wrapper}>
        <div className={styles.topWrapper}>
            <div className={styles.selectWrapper}>
                <div className={styles.btn} onClick={toggleDropdown}>
                    <img src={bird} alt="" />
                    <span> B2B SaaS</span>
                    <img src={arrow} alt="" />
                    {isDropdownOpen && (
                <div className={styles.dropdownWrapper}>
                  <div>Generative AI</div>
                  <div>ClimateTech</div>
                  <div>BioTech</div>
                </div>
              )}
                </div>
                <div className={styles.clearBtn}onClick={handleClearChat}>
                    <div className={styles.deleteContainer}><img src={deleteImage} alt="" /></div>
                    <span>Clear Chat</span>
                </div>
                
            </div>
        </div>
        <div className={styles.contentWrapper}>
         {!isSearched? (
            <>
         <div className={styles.contentText}>
         Let's make it possible !
         </div>
         <div className={styles.inputContainer}>
            <div className={styles.suggestionCards}>
                <div className={styles.card}>
                    <span>{userInput}</span>
                </div>
                <div className={styles.card}>
                    <span>How do I get started with Llama Index?</span>
                </div>
                <div className={styles.card}>
                    <span>How do I get started with Llama Index?</span>
                </div>
                <div className={styles.card}>
                    <span>How do I get started with Llama Index?</span>
                </div>
            </div>
            
         </div>
         </>):(
            <>
            <div className={styles.searchedWrapper}>
            <div className={styles.questionWrapper}>
                <img src={questionLogo} alt="" />
                <span>{userInput}</span>
            </div>
            <div className={styles.responseWrapper}>
            <img src={responseLogo} alt="" />
            <div className={styles.responseText}>
            {responseText}
            </div>
            </div>
            <div className={styles.stopBtn} onClick={onClearChat}>
            <img src={block} alt="" />
            <span>Stop Generating</span>
            </div>
            </div>
            </>
         )}
         <div className={styles.inputWrapper}>
            <div className={styles.input}>
            <input
            type="text"
            placeholder="Let the magic begin, Ask a question"
            className={styles.searchInput}
            value={userInput}
            onChange={handleInputChange}
          />
              <img src={searchIcon} alt="" className={styles.searchIcon} onClick={handleSearchIconClick}/>
              </div>
            <div className={styles.mistakeText}>
                <span>VcOS can make mistakes. Consider checking important information.</span>
            </div>
            </div>
        </div>
        {isModalOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <p>Are you sure?</p>
              <div>
                <button onClick={handleModalCloseYes}>Yes</button>
                <button onClick={handleModalCloseNo}>No</button>
              </div>
            </div>
          </div>
        )}
        </div>
    </>
  )
}

export default ChatBox