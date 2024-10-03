import { useState, version } from 'react';
import wirexLogo from './assets/wirex.png';
import superChainLogo from './assets/superchain.png';

import './App.css';
import { SizedBox } from './sizedBox';

import { MightyWidget, MightyPage } from 'mighty-academy-widget';
import WidgetSetup from './Constructor';

function App() {
  const [count, setCount] = useState(0);
  const [changedPage, setChangedPage] = useState('constructor');
  const [secondPageFullscreen, setSecondPageFullscreen] =
    useState(false);

  if (changedPage === 'second') {
    return (
      <>
        <button onClick={() => setChangedPage('index')}>
          main page
        </button>
        <button onClick={() => setChangedPage('constructor')}>
          constructor page
        </button>
        <button onClick={() => setSecondPageFullscreen(true)}>
          go fullscreen (reload page to exit)
        </button>

        <div
          style={
            secondPageFullscreen
              ? {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }
              : undefined
          }
        >
          <MightyPage
            partnerId="Superchain"
            //@ts-ignore
            logoSrc={superChainLogo}
            targetUrl="https://test.mighty.study/courses/669a8e515007186b0e7aff9c"
          />
        </div>
      </>
    );
  }

  if (changedPage === 'constructor') {
    return (
      <>
        <button onClick={() => setChangedPage('index')}>
          main page
        </button>
        <button onClick={() => setChangedPage('second')}>
          second page
        </button>

        <WidgetSetup></WidgetSetup>
      </>
    );
  }

  return (
    <>
      <div>
        <span className="logo wirex" id="wirexSmall">
          <MightyWidget
            logoSrc={wirexLogo}
            partnerId="Wirex"
            percent="90%"
          >
            <img src={wirexLogo} className="logo" alt="wirex logo" />
          </MightyWidget>
        </span>
        <span className="logo wirex" id="wirex">
          <MightyWidget logoSrc={wirexLogo} partnerId="Wirex">
            <img src={wirexLogo} className="logo" alt="wirex logo" />
          </MightyWidget>
        </span>
        <span className="logo superchain" id="superchain">
          <MightyWidget
            logoSrc={superChainLogo}
            partnerId="Superchain"
            percent="70%"
          >
            <img
              src={superChainLogo}
              className="logo react"
              alt="superchain logo"
            />
          </MightyWidget>
        </span>
        <span className="logo superchain" id="superchainSmall">
          <MightyWidget
            logoSrc={superChainLogo}
            partnerId="Superchain"
          >
            <img
              src={superChainLogo}
              className="logo react"
              alt="superchain logo"
            />
          </MightyWidget>
        </span>
      </div>
      <h1>Vite + React {version}</h1>
      <button onClick={() => setChangedPage('second')}>
        second page
      </button>
      <button onClick={() => setChangedPage('constructor')}>
        constructor page
      </button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <SizedBox heigth={10} />
        <MightyWidget
          partnerId="Magic_Ball"
          targetUrl="https://test.mighty.app/stydy/646ceccd9d546b90065bcac0/646cedd19d546b90065bcad8/646cee099d546b90065bcadf"
          percent="80%"
        >
          <button id="learnButton">Learn react from Mighty</button>
        </MightyWidget>
        <SizedBox heigth={10} width={10} />
        <MightyWidget partnerId="Magic_Ball12" percent="70%">
          <button id="errorButton">error button</button>
        </MightyWidget>
        <SizedBox heigth={10} width={10} />
        <MightyWidget partnerId="Harvest_Labs" percent="80%">
          <button id="harvestButton">Harvest Labs</button>
        </MightyWidget>
        <SizedBox heigth={10} width={10} />
        <MightyWidget partnerId="Mintpad" percent="65%">
          <button id="mindButton">Mintpad</button>
        </MightyWidget>
        <SizedBox heigth={10} width={10} />
        <MightyWidget partnerId="Mintpad" theme="dark">
          <button id="mindButtonDark">Mintpad dark theme</button>
        </MightyWidget>

        <SizedBox heigth={10} width={10} />
        <MightyWidget partnerId="Mintpad" theme="light">
          <button id="mindButtonLight">Mintpad light theme</button>
        </MightyWidget>

        <mighty-widget
          partnerId="Superchain"
          targetUrl="https://test.mighty.study/courses/669a8e515007186b0e7aff9c"
          theme="dark"
          percent="50%"
        >
          <button>learn</button>
        </mighty-widget>
      </div>
    </>
  );
}

export default App;
