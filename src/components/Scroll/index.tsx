import * as React from 'react';
import scopedClassMaker from '../../utils/scopedClassMaker';
import './index.scss';
import {
  MouseEventHandler,
  TouchEventHandler,
  UIEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
  handlePull?: () => void;
}
const sc = scopedClassMaker('react-ui-scroll');
const Scroll: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);
  const [barVisible, setBarVisible] = useState(false);
  const [innerTranslateY, _setInnerTranslateY] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const firstYRef = useRef(0);
  const firstBarTopRef = useRef(0);
  const timeoutRef = useRef<number | null>(null);
  const lastTouchYRef = useRef(0);
  const moveCount = useRef(0);
  const pulling = useRef(false);

  useEffect(() => {
    // mounted的时候计算滚动条高度
    const scrollHeight = containerRef.current!.scrollHeight; // 整个滚动内容的高度
    const viewHeight = containerRef.current!.getBoundingClientRect().height; // 可视范围的高度
    setBarHeight((viewHeight * viewHeight) / scrollHeight);
  }, []);

  const setBarTop = (barTop: number) => {
    if (barTop < 0) return;
    const viewHeight = containerRef.current!.getBoundingClientRect().height;
    const maxBarTop = viewHeight - barHeight;
    if (barTop > maxBarTop) return;
    _setBarTop(barTop);
  };
  const setInnerTranslateY = (y: number) => {
    if (y < 0) {
      y = 0;
    } else if (y > 150) {
      y = 150;
    }
    _setInnerTranslateY(y);
  };
  const onScroll: UIEventHandler = (e) => {
    setBarVisible(true);
    const scrollHeight = e.currentTarget.scrollHeight;
    const viewHeight = e.currentTarget.getBoundingClientRect().height;
    const scrollTop = e.currentTarget.scrollTop;
    setBarTop((scrollTop * viewHeight) / scrollHeight);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setBarVisible(false);
    }, 300);
  };
  const handleBarMouseDown: MouseEventHandler = (e) => {
    draggingRef.current = true;
    firstYRef.current = e.clientY;
    firstBarTopRef.current = barTop;
  };
  const handleBarMouseMove = (e: MouseEvent) => {
    if (draggingRef.current) {
      const deltaY = e.clientY - firstYRef.current;
      const newBarTop = firstBarTopRef.current + deltaY;
      setBarTop(newBarTop);
      const scrollHeight = containerRef.current!.scrollHeight;
      const viewHeight = containerRef.current!.getBoundingClientRect().height;
      containerRef.current!.scrollTop = (newBarTop * scrollHeight) / viewHeight;
    }
  };
  const handleBarMouseUp = () => {
    draggingRef.current = false;
  };
  const handleSelect = (e: Event) => {
    if (draggingRef.current) {
      e.preventDefault();
    }
  };
  const handleTouchStart: TouchEventHandler = (e) => {
    if (containerRef.current!.scrollTop !== 0) {
      return;
    }
    lastTouchYRef.current = e.touches[0].clientY;
    pulling.current = true;
    moveCount.current = 0;
  };
  const handleTouchMove: TouchEventHandler = (e) => {
    // deltaY>0 下拉；deltaY<0 上拉
    const deltaY = e.touches[0].clientY - lastTouchYRef.current;
    moveCount.current += 1;
    if (moveCount.current === 1 && deltaY < 0) {
      pulling.current = false;
      return;
    }
    if (!pulling.current) {
      return;
    }
    setInnerTranslateY(innerTranslateY + deltaY);
    lastTouchYRef.current = e.touches[0].clientY;
  };
  const handleTouchEnd: TouchEventHandler = () => {
    if (pulling.current) {
      setInnerTranslateY(0);
      props.handlePull && props.handlePull();
      pulling.current = false;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleBarMouseMove);
    document.addEventListener('mouseup', handleBarMouseUp);
    document.addEventListener('selectstart', handleSelect);
    return () => {
      document.removeEventListener('mouseup', handleBarMouseUp);
      document.removeEventListener('mousemove', handleBarMouseMove);
      document.removeEventListener('selectstart', handleSelect);
    };
  });
  return (
    <div {...rest} className={sc()}>
      <div
        className={sc('inner')}
        style={{ transform: `translateY(${innerTranslateY}px)` }}
        ref={containerRef}
        onScroll={onScroll}
        onTouchStart={handleTouchStart} // 手机上的事件
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
      {barVisible && (
        <div className={sc('track')} onMouseDown={handleBarMouseDown}>
          <div
            className={sc('bar')}
            style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
          />
        </div>
      )}
      <div className={sc('pulling')} style={{ height: `${innerTranslateY}px` }}>
        {innerTranslateY === 150 ? (
          <span className={sc('pulling-text')}>松开手指更新</span>
        ) : (
          <span className={sc('pulling-arrow')}>⇣</span>
        )}
      </div>
    </div>
  );
};
export default Scroll;
