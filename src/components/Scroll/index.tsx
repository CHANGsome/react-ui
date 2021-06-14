import * as React from 'react';
import scopedClassMaker from '../../utils/scopedClassMaker';
import './index.scss';
import {
  MouseEventHandler,
  UIEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {}
const sc = scopedClassMaker('react-ui-scroll');
const Scroll: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, _setBarTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const firstYRef = useRef(0);
  const firstBarTopRef = useRef(0);

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
  const onScroll: UIEventHandler = (e) => {
    const scrollHeight = e.currentTarget.scrollHeight;
    const viewHeight = e.currentTarget.getBoundingClientRect().height;
    const scrollTop = e.currentTarget.scrollTop;
    setBarTop((scrollTop * viewHeight) / scrollHeight);
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
      <div className={sc('inner')} onScroll={onScroll} ref={containerRef}>
        {children}
      </div>
      <div className={sc('track')} onMouseDown={handleBarMouseDown}>
        <div
          className={sc('bar')}
          style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
        />
      </div>
    </div>
  );
};
export default Scroll;
