'use client'
import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import GlobalImage from '../../components/common/GlobalImage';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryLink?: {
    text: string;
    url: string;
  };
  secondaryLink?: {
    text: string;
    url: string;
  };
  image: string;
  imageSize?: 'full' | 'large' | 'medium' | 'small';
  darkText?: boolean;
  bgColor?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryLink,
  secondaryLink,
  image,
  imageSize = 'full',
  darkText = false,
  bgColor
}: HeroProps) {
  const textColorClass = darkText ? 'text-black' : 'text-white';
  const bgColorStyle = bgColor ? { backgroundColor: bgColor } : {};
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [contentStyle, setContentStyle] = useState<React.CSSProperties>({});
  const [isMobile, setIsMobile] = useState(false);
  
  // GIF控制状态 - 一旦播放就不会停止
  const [gifStarted, setGifStarted] = useState(false);
  // 保存原始GIF URL
  const originalGifUrl = useRef(image);
  // 保存静态图片URL
  const staticImageUrl = useRef('');

  // 分割标题
  const titleParts = title.split(' ');
  const firstLine = titleParts[0]; // "ShanghaiTech"
  const secondLine = titleParts.slice(1).join(' '); // "CardioVision LAB"
  
  // 检测是否为移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // 创建静态帧版本的GIF (在组件挂载时)
  useEffect(() => {
    // 确保我们只处理GIF文件
    if (image.toLowerCase().endsWith('.gif')) {
      // 生成静态帧URL
      const gifPath = image;
      const staticPath = image.replace('.gif', '_static.jpg'); // 或者使用你的命名约定
      
      // 保存两个版本的URL
      originalGifUrl.current = gifPath;
      staticImageUrl.current = staticPath;
    }
  }, [image]);

  // 监听页面滚动，控制GIF播放
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !contentRef.current) return;
      
      const heroRect = heroRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      // 计算滚动进度 - 用于标题的渐进式变化
      const maxScrollForTitleTransform = 30; 
      let titleProgress = Math.min(scrollY / maxScrollForTitleTransform, 1);
      
      // 如果是移动设备，则直接设置为完全滚动状态
      if (isMobile) {
        titleProgress = 1;
      }
      
      setScrollProgress(titleProgress);
      
      // 计算内容位置的逻辑
      let newStyle: React.CSSProperties = {};
      
      const contentHeight = contentRect.height;
      const bottomSafetyMargin = 50;
      
      if (heroRect.top <= 0) {
        if (heroRect.bottom >= contentHeight + bottomSafetyMargin) {
          newStyle = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%'
          };
        } else {
          const offsetY = heroRect.bottom - contentHeight - bottomSafetyMargin;
          newStyle = {
            position: 'fixed',
            top: `${Math.min(0, offsetY)}px`,
            left: 0,
            width: '100%'
          };
        }
      } else {
        newStyle = {
          position: 'relative',
          top: 'auto',
          left: 'auto'
        };
      }
      
      setContentStyle(newStyle);
      
      // 只检查用户是否开始滚动
      // 一旦标题开始移动（即用户开始滚动），就开始播放GIF
      if (titleProgress > 0 && !gifStarted) {
        setGifStarted(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, gifStarted]);

  // 根据 imageSize 确定图片容器类名
  const getImageContainerClass = () => {
    switch(imageSize) {
      case 'small': return 'w-1/2 h-2/3 mx-auto mt-auto';
      case 'medium': return 'w-3/4 h-3/4 mx-auto mt-auto';
      case 'large': return 'w-5/6 h-5/6 mx-auto mt-auto';
      case 'full':
      default: return 'inset-0';
    }
  };

  // 计算标题样式 - 根据滚动进度平滑过渡
  // const titleContainerStyle: React.CSSProperties = {
  //   textAlign: scrollProgress < 0.1 ? 'center' : 'left',
  //   transform: scrollProgress < 0.3 
  //     ? `translateX(${-50 * scrollProgress}%)` 
  //     : 'translateX(0)',
  //   transition: isMobile ? 'none' : 'all 1.0s cubic-bezier(0.165, 0.84, 0.44, 1)',
  //   paddingLeft: isMobile ? '16px' : '0'
  // };
  const titleContainerStyle: React.CSSProperties = {
    textAlign: 'left',
    transition: isMobile ? 'none' : 'all 1.0s cubic-bezier(0.165, 0.84, 0.44, 1)',
    paddingLeft: isMobile ? '16px' : '0'
  };

  // 根据设备类型计算字体大小
  const getTitleFontSize = () => {
    if (isMobile) {
      return '3rem';
    } else {
      return '5rem'; // 基础字体大小
      // return `calc(4rem + ${scrollProgress < 0.5 ? 1 : 0}rem)`;
    }
  };

  // 标题第一部分的样式
  const firstLineStyle: React.CSSProperties = {
    opacity: 1,
    fontSize: getTitleFontSize(),
    // display: 'inline-block',
    display: 'block',
    marginRight: scrollProgress < 0.5 ? '0.5rem' : '0',
    transition: isMobile ? 'none' : 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)'
  };

  // 标题第二部分的样式
  const secondLineStyle: React.CSSProperties = {
    opacity: 1,
    fontSize: getTitleFontSize(),
    // display: scrollProgress < 0.5 ? 'inline-block' : 'block',
    display: 'block',
    transition: isMobile ? 'none' : 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)'
  };

  return (
    <div 
      ref={heroRef}
      className="relative w-full h-[480px] md:h-[540px] overflow-hidden"
      style={bgColorStyle}
    >
      {/* 文本内容容器 */}
      <div 
        ref={contentRef}
        className="z-20 w-full px-4 md:px-12 pt-10"
        style={contentStyle}
      >
        <div 
          className="w-full"
          style={titleContainerStyle}
        >
          {/* 标题始终保持两部分，但样式随滚动变化 */}
          <h2 className={`font-semibold ${textColorClass}`} style={firstLineStyle}>
            {firstLine}
          </h2>
          <h2 className={`font-semibold ${textColorClass}`} style={secondLineStyle}>
            {secondLine}
          </h2>
          
          <h3 className={`text-xl md:text-2xl lg:text-3xl font-medium ${textColorClass}`}
              // style={{
              //   textAlign: scrollProgress < 0.5 ? 'center' : 'left',
              //   transform: scrollProgress < 0.3 
              //     ? 'translateX(0)' 
              //     : scrollProgress < 0.5 
              //       ? `translateX(${-15 * (scrollProgress - 0.3) / 0.2}%)` 
              //       : 'translateX(0)',
              //   transition: isMobile ? 'none' : 'all 0.8s cubic-bezier(0.33, 1, 0.68, 1)',
              //   maxWidth: '100%'
              // }}>
              style={{
                textAlign: 'left',
                transition: isMobile ? 'none' : 'all 0.8s cubic-bezier(0.33, 1, 0.68, 1)',
                maxWidth: '100%'
              }}>
            {subtitle}
          </h3>
          
          {description && (
            <p className={`mt-3 text-base md:text-lg ${textColorClass}`}
               style={{
                 textAlign: scrollProgress < 0.5 ? 'center' : 'left',
                 transition: isMobile ? 'none' : 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)',
                 maxWidth: '100%'
               }}>
              {description}
            </p>
          )}

          {/* Links */}
          {(primaryLink || secondaryLink) && (
            <div className={`flex items-center mt-4 ${isMobile ? 'flex-col space-y-2' : 'space-x-7'}`}
                 style={{
                   justifyContent: scrollProgress < 0.5 ? 'center' : 'flex-start',
                   alignItems: isMobile ? 'flex-start' : 'center',
                   transition: isMobile ? 'none' : 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)'
                 }}>
              {primaryLink && (
                <Link
                  href={primaryLink.url}
                  className="text-apple-link-blue text-lg md:text-xl hover:underline flex items-center"
                >
                  {primaryLink.text}
                  <span className="ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" className="fill-current">
                      <path d="M0,7.05a1,1,0,0,0,.29.74l5.69,5.69a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L3.81,8.47h9.22a1,1,0,0,0,0-2H3.81L7.4,2.88A1,1,0,0,0,6,1.47L.29,7.17A1,1,0,0,0,0,7.05Z" transform="translate(14) rotate(180)"/>
                    </svg>
                  </span>
                </Link>
              )}

              {secondaryLink && (
                <Link
                  href={secondaryLink.url}
                  className="text-apple-link-blue text-lg md:text-xl hover:underline flex items-center"
                >
                  {secondaryLink.text}
                  <span className="ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" className="fill-current">
                      <path d="M0,7.05a1,1,0,0,0,.29.74l5.69,5.69a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41L3.81,8.47h9.22a1,1,0,0,0,0-2H3.81L7.4,2.88A1,1,0,0,0,6,1.47L.29,7.17A1,1,0,0,0,0,7.05Z" transform="translate(14) rotate(180)"/>
                    </svg>
                  </span>
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* 背景图片/GIF - 只要开始滚动就播放，不会停止 */}
      <div className={`absolute z-10 overflow-hidden ${getImageContainerClass()}`}>
        {image.toLowerCase().endsWith('.gif') ? (
          <>
            {/* 如果是GIF，开始时显示静态图像，滚动后显示动态GIF */}
            <img
              src={gifStarted ? originalGifUrl.current : staticImageUrl.current || originalGifUrl.current}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover object-right"
              style={{
                transition: 'opacity 0.3s ease-in-out'
              }}
            />
          </>
        ) : (
          // 如果不是GIF，使用标准的Next.js Image组件
          <GlobalImage
            src={image}
            alt={title}
            fill
            className="object-cover object-right"
            priority
          />
        )}
      </div>

      {/* GIF播放状态指示器（开发调试用，可以移除） */}
      {/* {process.env.NODE_ENV === 'development' && image.toLowerCase().endsWith('.gif') && (
        <div className="absolute top-3 right-3 z-30 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
          GIF状态: {gifStarted ? '已激活' : '等待激活'}
        </div>
      )} */}

      {/* Optional tag line */}
      <div className="absolute bottom-5 w-full text-center z-20">
        <p className={`text-sm ${textColorClass}`}>@CardioVision Lab.</p>
      </div>
    </div>
  );
}