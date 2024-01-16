import React, {useState, useEffect} from 'react'
import styles from "../ChatComponent/ChatComponent.module.css"
import add from "../../assets/add.png"
import exit from "../../assets/exit.png"
import deleteImage from "../../assets/delete.png"
import ChatBox from '../ChatBox/ChatBox'
import axios from 'axios'
const ChatComponent = () => {
    const [isSearched, setIsSearched] = useState(false);
    const [historyData, setHistoryData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post('http://localhost:3000/allSessionsByUser', { "user_id": "1" } );
            console.log(response)
            console.log(response.data)
            setHistoryData(response.data); 
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    
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
            {historyData.map((item, index) => (
              <div key={index} className={styles.historyCard}>
                <span>{item.prompt}</span>
              </div>
            ))}
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