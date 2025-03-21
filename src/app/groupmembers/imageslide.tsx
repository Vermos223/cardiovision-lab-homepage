import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import GlobalImage from '../../components/common/GlobalImage';
interface ImageSlideshowProps {
  images: string[];
  interval?: number;
  title?: string;
  subtitle?: string;
  bgColor?: string;
  darkText?: boolean;
}

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  images,
  interval = 8000,
  title,
  subtitle,
  bgColor = '#000000',
  darkText = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const slideContainerRef = useRef<HTMLDivElement>(null);
  
  // 拖拽相关状态
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  
  const textColor = darkText ? 'text-black' : 'text-white';
  const subtitleColor = darkText ? 'text-gray-600' : 'text-gray-300';
  
  // 处理无限循环的索引计算
  const getVisibleImages = useCallback(() => {
    if (images.length <= 1) return images;
    
    // 创建一个包含原始图像加首尾额外图像的新数组
    return [
      images[images.length - 1], // 在开头添加最后一张
      ...images,                  // 原始图像
      images[0]                   // 在末尾添加第一张
    ];
  }, [images]);
  
  const visibleImages = getVisibleImages();
  
  // 重置定时器
  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    timerRef.current = setInterval(() => {
      goToNext();
    }, interval);
  }, [interval, images.length]);

  // 无限循环切换处理
  const handleInfiniteTransition = useCallback(() => {
    // 如果到达克隆的第一张图片（实际是最后一个位置）
    if (currentIndex === images.length) {
      // 关闭过渡动画
      if (slideContainerRef.current) {
        slideContainerRef.current.style.transition = 'none';
      }
      // 瞬间切换到真正的第一张
      setCurrentIndex(0);
      // 在下一帧恢复过渡动画
      requestAnimationFrame(() => {
        if (slideContainerRef.current) {
          slideContainerRef.current.style.transition = 'transform 500ms ease-out';
        }
      });
    }
    
    // 如果到达克隆的最后一张图片（实际是第一个位置）
    if (currentIndex === -1) {
      // 关闭过渡动画
      if (slideContainerRef.current) {
        slideContainerRef.current.style.transition = 'none';
      }
      // 瞬间切换到真正的最后一张
      setCurrentIndex(images.length - 1);
      // 在下一帧恢复过渡动画
      requestAnimationFrame(() => {
        if (slideContainerRef.current) {
          slideContainerRef.current.style.transition = 'transform 500ms ease-out';
        }
      });
    }
  }, [currentIndex, images.length]);

  // 监测索引变化，处理无限循环
  useEffect(() => {
    const timeoutId = setTimeout(handleInfiniteTransition, 500);
    return () => clearTimeout(timeoutId);
  }, [currentIndex, handleInfiniteTransition]);

  // 幻灯片切换函数
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    resetTimer();
  }, [resetTimer]);

  // 上一张
  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => prev - 1);
    resetTimer();
  }, [resetTimer]);

  // 下一张
  const goToNext = useCallback(() => {
    setCurrentIndex(prev => prev + 1);
    resetTimer();
  }, [resetTimer]);

  // 拖拽开始处理
  const handleDragStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    
    // 获取起始位置
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartPosition(clientX);
    
    // 暂停自动轮播
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  // 拖拽移动处理
  const handleDragMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    // 计算拖拽距离
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startPosition;
    
    setCurrentTranslate(diff);
  }, [isDragging, startPosition]);

  // 拖拽结束处理
  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;
    
    // 根据拖拽距离和方向决定是否切换图片
    const slideWidth = slideRef.current?.clientWidth || 0;
    const threshold = slideWidth * 0.2; // 拖拽超过20%宽度时切换
    
    if (Math.abs(currentTranslate) > threshold) {
      if (currentTranslate > 0) {
        goToPrevious();
      } else {
        goToNext();
      }
    }
    
    // 重置状态
    setIsDragging(false);
    setCurrentTranslate(0);
    
    // 恢复自动轮播
    resetTimer();
  }, [currentTranslate, goToNext, goToPrevious, resetTimer, isDragging]);

  // 设置初始定时器并在组件卸载时清理
  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  // 添加全局事件处理
  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) handleDragEnd();
    };
    
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleDragEnd]);

  return (
    <div className="relative w-full" style={{ backgroundColor: bgColor }}>
      <div 
        ref={slideRef}
        className="relative h-[500px] md:h-[600px] overflow-hidden"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {/* 滑动容器 - 注意这里使用了首尾额外图片 */}
        <div 
          ref={slideContainerRef}
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ 
            transform: `translateX(${-((currentIndex + 1) * 100)}%) translateX(${currentTranslate}px)`,
            transition: isDragging ? 'none' : 'transform 500ms ease-out'
          }}
        >
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full shrink-0 relative"
            >
              <GlobalImage
                src={image}
                alt={`Slide ${index}`}
                fill
                className="object-cover object-center pointer-events-none"
                priority={index <= 1}
                draggable={false}
              />
            </div>
          ))}
        </div>
        
        {/* 文本内容 */}
        {(title || subtitle) && (
          <div className="absolute top-0 left-0 w-full pt-20 md:pt-24 z-20 pointer-events-none">
            <div className="text-center">
              {title && <h1 className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-4 ${textColor}`}>{title}</h1>}
              {subtitle && <p className={`text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto ${subtitleColor}`}>{subtitle}</p>}
            </div>
          </div>
        )}
        
        {/* 导航点 - 这里只显示原始图片的导航点 */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* 左右导航按钮 */}
        <div className="absolute inset-y-0 left-0 flex items-center z-10">
          <button
            className="bg-black/20 hover:bg-black/40 text-white p-2 rounded-r-lg ml-0"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center z-10">
          <button
            className="bg-black/20 hover:bg-black/40 text-white p-2 rounded-l-lg mr-0"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlideshow;