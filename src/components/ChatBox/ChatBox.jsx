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
        const [isModalOpen, setModalOpen] = useState(false);
        const [question, setQuestion] = useState('');
        const [stopped, setStopped] = useState(false);
        const handleInputChange = (e) => {
            setUserInput(e.target.value);
            // setQuestion(e.target.value);
          };
          const handleSearch = async () => {
            try {
              const response = await fetch('http://localhost:3000/addChat', {
                method: 'POST',
                // headers: {
                //   'Content-Type': 'application/json',
                // },
                body: JSON.stringify({
                  "user_id": "1",
                  "sector_id": "1",
                  "session_id": "2",
                  "prompt": "yo1",
                  "response": "yo1!",
                  "timestamp": ""
                }),
              });
          
              const responseData = await response.json();
              console.log('Response from backend:', responseData);
          
              const choices = responseData.choices || [];
              setResponseText(choices.length > 0 ? choices[0]?.text : 'No response from the backend');
              setQuestion(userInput);
            } catch (error) {
              console.error('Error fetching data from backend:', error);
              setResponseText('Error fetching response from the backend');
            }
          };
          
          const handleSearchIconClick = () => {
            handleSearch();
            onSearchIconClick();
            setUserInput('');
          };
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  const handleClearChat = () => {
    setModalOpen(true); // Open the modal when "Clear Chat" is clicked
  };
  const onStopBtn = () => {
    setStopped(true);
    setUserInput('');
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchIconClick();
    }
  };
  const handleModalCloseYes = () => {
    setUserInput('');
    setModalOpen(false); // Close the modal
    onClearChat(); // Perform the clear chat action
  };
  const handleModalCloseNo = () => {
    setModalOpen(false);
  };
    const handleCardClick = (text) => {
      setUserInput(text);
      setQuestion(text);
      handleSearchIconClick();
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
                <div className={styles.card}onClick={() => handleCardClick("How do I get started with Llama Index?")}>
                    <span>How do I get started with Llama Index?</span>
                </div>
                <div className={styles.card}onClick={() => handleCardClick("How do I get started with Llama Index?")}>
                    <span>How do I get started with Llama Index?</span>
                </div>
                <div className={styles.card}onClick={() => handleCardClick("How do I get started with Llama Index?")}>
                    <span>How do I get started with Llama Index?</span>
                </div>
                <div className={styles.card}onClick={() => handleCardClick("How do I get started with Llama Index?")}>
                    <span>How do I get started with Llama Index?</span>
                </div>
            </div>
            
         </div>
         </>):(
            <>
            <div className={styles.searchedWrapper}>
            <div className={styles.questionWrapper}>
                <img src={questionLogo} alt="" />
                <span>{question}</span>
            </div>
            <div className={styles.responseWrapper}>
            <img src={responseLogo} alt="" />
            <div className={styles.responseText}>
            {responseText}
            </div>
            </div>
            <div className={styles.stopBtn} onClick={onStopBtn}style={{ visibility: stopped ? 'hidden' : 'visible' }}>
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
            onKeyDown={handleKeyDown}
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
              <div className={styles.modalButtons}>
                <div onClick={handleModalCloseYes}className={styles.modalButton}>Yes</div>
                <div onClick={handleModalCloseNo}className={styles.modalButton}>No</div>
              </div>
            </div>
          </div>
        )}
        </div>
    </>
  )
}

export default ChatBox