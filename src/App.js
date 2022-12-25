import './App.css';
import './netflix.JPG';
import './spotify.JPG';
import './HIITS.JPG';
import './mayowa.png';
import './tiktok.png';
import './slack.jpg';
import './tiktok-.jpg';
import './slack-logo.jpg'
import './tiktok-clone.jpg'
import './spotify-clone.jpg'
import './weather.png'

function App() {
  return (
    <div className="App">
     <div className='app__header'>
        <h6>HI, MY NAME IS</h6>
        <h1>AKRASI DANIEL UWEM</h1>
        <h1>I am a Fullstack dev.</h1>
         <p>i like to build amazing front-end experiences for humans.
          <br />
         currently i'm focused on empowering people to learn how to
         <br />
         code & change their future.</p>
         <a href='https://linkedin.com/in/akrasi-daniel-11a889244'target='_blank'rel='noopener noreferrer'>
          <button>
            Do you want to work with me?
          </button>
         </a>
     </div>

     <div className='app__footer'>
      <img className='app__footer__img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReMTSKpeYmzl4uJs1Ekuz7ldNW9B2v7WWhBg&usqp=CAU' alt=''/>
      <img className='app__footer__img'src='./slack-logo.jpg' alt=''/>
      <img className='app__footer__img'src='./tiktok-clone.jpg'alt=''/>
      <img className='app__footer__img'src='./spotify-clone.jpg'alt=''/>
     </div>

     <div className='app__about'>
      <img className='about__img' src='https://media-exp1.licdn.com/dms/image/C4D03AQFLqmxHqFnvKQ/profile-displayphoto-shrink_800_800/0/1667921873653?e=2147483647&v=beta&t=tUarLcF4ZsJB_MGn5j896xGHybgbu60FIakLqgWOt0I'alt='' />
        <h1>I'm Akrasi Daniel.</h1>
        <p>I've been coding for nearly 4 years. i'm a great software developer who loves building full-stack applications & learning new technologies.when i'm not coding i'm busy being a mechanical engineer repairing mechanical / electrical faults in automobiles or other devices.</p>
         
          <br/>
          <p>My preffered weapons are:</p>
          <br/>
          <div className='projects__li'>
         <div className='projects__li1'> 
        <li>React.js</li>    
        <li>Javascript (Node.js) </li>
        
        </div>
       <div className='projects__li1'>
       <li>Firebase</li>
       <li>Html /Css/React-Bricks</li>
       </div>
       
       </div>
          <br/><br/>
          <a href='https://github.com/Caesarfeuher'target='_blank'rel='noopener noreferrer'>
            <button className='button'>
              My Github
            </button>
          </a>
          <br/><br/> <br/><br/>
          <hr/>
     </div>
     <div className='app__projects'>
      <h1>My Coding Projects</h1>
      <div className='app__projects__container'>
      <img className='project__img' src='./netflix.JPG'alt='' />
      <div className='project__content'>
      <h2>Netflix clone app</h2>
      <br/>
       <p>
       Netflix is a subscription-based streaming service that allows members to watch TV shows and movies on an internet-connected device.
       </p>
      </div>
      </div>
      
       <br/> <br/>
       <div className='projects__li'>
        <div className='projects__li1'>
        <li>React.js</li>
       <li>Css</li>
        </div>
       <div className='projects__li1'>
       <li>Node.js</li>
       <li>firebase</li>
       </div>
       
       </div>
       
       <br/> <br/>
       <a href='https://netflix-clone-65c3d.web.app'target='_blank'rel='noopener noreferrer'>
        <button className='project__button'>
          View Demo
        </button>
       </a>



       <br/><br/>
       <div className='app__projects__container'>
      <img className='project__img' src='./spotify.JPG'alt='' />
      <div className='project__content'>
      <h2>Spotify clone app</h2>
      <br/>
       <p>
       Spotify is a digital music, podcast, and video service that gives you access to millions of songs and other content from creators all over the world.
       </p>
      </div>
      </div>
      <br/><br/>
       <div className='projects__li'>
        <div className='projects__li1'>
        <li>React.js</li>
       <li>Css</li>
        </div>
       <div className='projects__li1'>
       <li>Node.js</li>
       <li>firebase</li>
       </div>
       </div>
       <br/> <br/>
       <a href='https://spotify-clone-eeb6f.web.app'target='_blank'rel='noopener noreferrer'>
        <button className='project__button'>
          View Demo
        </button>
       </a>



       <br/><br/>
       <div className='app__projects__container'>
      <img className='project__img' src='./slack.jpg'alt='' />
      <div className='project__content'>
      <h2>Slack clone app</h2>
      <br/>
       <p>
       Slack is a messaging app for business that connects people to the information they need. By bringing people together to work as one unified team, Slack transforms the way organizations communicate.
       </p>
      </div>
      </div>
      <br/><br/>
       <div className='projects__li'>
        <div className='projects__li1'>
        <li>React.js</li>
       <li>Css</li>
        </div>
       <div className='projects__li1'>
       <li>Node.js</li>
       <li>firebase</li>
       </div>
       </div>
      <br/><br/>
       <a href='https://slack-clone-b7088.web.app'target='_blank'rel='noopener noreferrer'>
        <button className='project__button'>
          View Demo
        </button>
       </a>



       <br/><br/>
       <div className='app__projects__container'>
      <img className='project__img' src='./tiktok-.jpg'alt='' />
      <div className='project__content'>
      <h2>Tik-Tok clone app</h2>
      <br/>
       <p>
       TikTok, known in China as Douyin, is a short-form video hosting service owned by the Chinese company ByteDance. It hosts a variety of user-submitted videos, from content such as pranks, stunts, tricks, jokes and dance, with durations from 15 seconds to ten minutes.
       </p>
      </div>
      </div>
      <br/><br/>
       <div className='projects__li'>
        <div className='projects__li1'>
        <li>React.js</li>
       <li>Css</li>
        </div>
       <div className='projects__li1'>
       <li>Node.js</li>
       <li>firebase</li>
       </div>
       </div>
      <br/><br/>
       <a href='https://tiktok-clone-402eb.web.app'target='_blank'rel='noopener noreferrer'>
        <button className='project__button'>
          View Demo
        </button>
       </a>
       
       <br/><br/>
       <div className='app__projects__container'>
      <img className='project__img' src='./weather.png'alt='' />
      <div className='project__content'>
      <h2>Weather app</h2>
      <br/>
       <p>
       This weather app displays current weather and gives daily forcast for a week.
       </p>
      </div>
      </div>
      <br/><br/>
       <div className='projects__li'>
        <div className='projects__li1'>
        <li>React.js</li>
       <li>Css</li>
        </div>
       <div className='projects__li1'>
       <li>Node.js</li>
       <li>firebase</li>
       </div>
       </div>
      <br/><br/>
       <a href='https://weather-app-72083.web.app'target='_blank'rel='noopener noreferrer'>
        <button className='project__button'>
          View Demo
        </button>
       </a>


      <hr/>
     </div>
     <div className='app__experience'>
      <h1>My Experience</h1>
      <h6>2017-2018</h6>
      <h2>Html, Css and Javascript <br/>
        training
      </h2>
      <p>
      I started learning the fundamentals of web development utilizing it in building basic projects like the Supreme Court of Nigeria clone and some javascript games .
      </p>
      <hr/>
      <br/><br/><br/><br/><br/>
      <h6>2019-2020</h6>
      <h2>React / Node.js</h2>
      <p>
      After learning thoroughly the fundamentals of Html, Css and  
      Javascript I researched on some front-end frame works and 
      chose to learn and utilize React.js in my web development  
      subsequently including Node.js in order to achieve my goal of  
      being a professional and seasoned software developer.
      </p>
      <hr/>
      <br/><br/><br/>
      <div className='experience__proof'>
      <img className='experience__img' src='./HIITS.JPG'alt=''/>
      <div className='experience__content'>
      <h1>HiiT</h1>
      <p>
      After my learning I enrolled for a web-development class
      (full-stack) to get more training and various ideas to solve
       multiple and complex problems and to get a recognized
        professional certificate for the courses / skill acquired 
        after fulfilling the required criteria.
      </p>
      </div>
      </div>
      
      <hr/>
     
     </div>
     <div className='app__feedback'>
      <h1>
        What Clients Say About  <br/>
        Working With Me
      </h1>
      <p>
      Daniel is phenomenal developer. He is extremely fast,responsive, and very resourceful. I absolutely love working 
      with him.
      </p>
      <br/>
      <div className='feedback'>
        
        <div>
        <img className='feedback__mayo' src='./mayowa.png' alt=''/>
        </div>
        <div className='feedback__mayo__cont'>
        <p>Mayowa Abikoye</p>
        <p> CTO @ Scaffold Nig Ltd.</p>
        </div>
      
        <br/>
      </div>
     </div>
     <div className='app__feedback'></div>
     <div className='footer__end'>
      <p>
      Want me building stuff for you? Hit me on linkedIn
      </p>
      <a href='https://linkedin.com/in/akrasi-daniel-11a889244'target='_blank'rel='noopener noreferrer'>
        <button className='footer__end__button'>
          My Linkedin
        </button>
      </a>
     </div>
    </div>
  );
}

export default App;
