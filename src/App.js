
import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from'./assets/add-30.png';
import msgIcon from'./assets/message.svg';
import home from'./assets/home.svg';
import saved from'./assets/bookmark.svg';
import rocket from'./assets/rocket.svg';
import sendbtn from'./assets/send.svg';
import usericon from'./assets/user-icon.png';
import gptImgLogo from'./assets/chatgptLogo.svg';


function App() {

 
  return (
    <div className="App">
     <div className="sidebar">
<div className="upperside">
<div className="uppersidetop"><img src={gptLogo} alt="Logo " className="logo"/><span className="brand">ChatGPT</span></div>
<button className="midBtn"><img src={addBtn}alt="new chat " className="addBtn"/>New Chat</button>
<div className="uppersidebottom">
  
  <button className="query"><img src={msgIcon} alt=" Query" />What is Programming?</button>
  <button className="query"><img src={msgIcon} alt=" Query" />How to use an API?</button>
</div>
</div>
<div className="lowerside">
  <div className="listitems"><img src={home} alt="Home " className="listitemsimg" />Home</div>
  <div className="listitems"><img src={saved} alt="Saved " className="listitemsimg" />Saved</div>
  <div className="listitems"><img src={rocket} alt="Upgrade " className="listitemsimg" />Upgrade to Pro</div>

</div>
     </div>
     <div className="main">
      <div className="chats">
       <div className="chat">
        <img  className="chatimg" src={usericon} alt=" "/><p className="txt">lorem20 whtad jskdnajgsdkalsdm ?</p>
       </div>
       <div className="chat bot">
        <img  className="chatimg" src={gptImgLogo} alt=" "/><p className="txt">lorem20 thsjdhbksgdksdjnls ksjdhlskx hsgksasnlakj kgdksjnxls kjdhskuhdlskd sdjbskhdlskdl hsdgks gikahdkas hgdkajsndkasj khgskad b bjdhj jdhaksd ashdgkasjnda kajsdhlaksdn kashgdkasjndla kajshdlaksnd ajsgdkad auyrteuitr euryoeuroe ejrgeurhoiehr kejgrle</p>
       </div>
      </div>
      <div className="chatfooter">
        <div className="inp">
          <input type="text" placeholder='send a message' /><butoon className="send"  ><img src={sendbtn} alt="send"/></butoon>
        </div>
        <p>ChatGPT may produce incorrect information about people,places,facts.ChatGPT version September20.</p>
      </div>

     </div>
    </div>
  );
}

export default App;
