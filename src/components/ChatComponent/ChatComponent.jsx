import React, {useState} from 'react'
import styles from "../ChatComponent/ChatComponent.module.css"
import add from "../../assets/add.png"
import exit from "../../assets/exit.png"
import deleteImage from "../../assets/delete.png"
import ChatBox from '../ChatBox/ChatBox'
const ChatComponent = () => {
    const [isSearched, setIsSearched] = useState(false);
    const handleClearChat = () => {
        setIsSearched(false);
      };
    
      const handleSearchIconClick = () => {
        setIsSearched(true);
      };
      
  return (
    <>
    <div className={styles.pageWrapper}>
        <div className={styles.sideBarWrapper}>
            <div className={styles.btn} onClick={handleClearChat}>
            <img src={add} alt="" />
            <span>Create New Chat</span>
            </div>
            <div className={styles.historyWrapper}>
                <div className={styles.historyCard}>
                    <span>Trending Startup</span>
                </div>
                <div className={styles.historyCard}>
                    <span>Trending Startup</span>
                </div>
                <div className={styles.historyCard}>
                    <span>Trending Startup</span>
                </div>
                <div className={styles.historyCard}>
                    <span>Trending Startup</span>
                </div>
                <div className={`${styles.historyCard} ${styles.active}`}>
                    <span>Trending Startup</span>
                </div>
                <div className={styles.historyCard}>
                    <span>Trending Startup</span>
                </div>
            </div>
            <div className={styles.bottomBtnWrapper}>
            <div className={styles.btn}>
            <img src={deleteImage} alt="" />
            <span>Clear History</span>
            </div>
            <div className={styles.btn}>
            <img src={exit} alt="" />
            <span>Exit</span>
            </div>
            </div>
        </div>
        <div className={styles.chatWrapper}>
        <ChatBox isSearched={isSearched} onClearChat={handleClearChat} onSearchIconClick={handleSearchIconClick} />
        </div>
    </div>
    </>
  )
}

export default ChatComponent