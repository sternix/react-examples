import { useEffect, useState } from 'react';
import Minesweeper from './Minesweeper';

function App() {
  const [platform, setPlatform] = useState(window.innerWidth <= 768 ? 'mobile' : 'desktop');
  const [lastTouch, setLastTouch] = useState(new Date());
  const [samePos, setSamePos] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth <= 768) {
        setPlatform('mobile');
      } else {
        setPlatform('desktop');
      }
    }

    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const touchStart = () => {
      setSamePos(true);
      setLastTouch(new Date());
    }

    const touchMove = () => {
      setSamePos(false);
    }

    window.addEventListener('touchstart', touchStart);
    window.addEventListener('touchmove', touchMove);

    return () => {
      window.removeEventListener('touchstart', touchStart);
      window.removeEventListener('touchmove', touchMove);
    };
  }, []);

  return (
    <div
      style={
        platform === 'desktop'
          ? {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }
          : {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            height: '100%',
          }
      }
    >
      <div
        style={
          platform === 'desktop'
            ? {
              display: 'inline-block',
            }
            : {
              transform: 'scale(1.8)',
              transformOrigin: 'left top',
              display: 'inline-block',
            }
        }
      >
        <Minesweeper
          defaultDifficulty="Beginner"
          sameTouchPos={samePos}
          lastTouch={lastTouch}
          platform={platform}
        />
      </div>
    </div>
  );
}

export default App;
