'use client'
import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
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

  // 分割标题
  const titleParts = title.split(' ');
  const firstLine = titleParts[0]; // "ShanghaiTech"
  const secondLine = titleParts.slice(1).join(' '); // "CardioVision LAB"
  
  // 监听页面滚动
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !contentRef.current) return;
      
      const heroRect = heroRef.current.getBoundingClientRect();
      const contentRect = contentRef.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // 计算滚动进度 - 用于标题的渐进式变化
      // 使用0-100px的滚动距离作为0-1的进度值
      const maxScrollForTitleTransform = 30; 
      let titleProgress = Math.min(scrollY / maxScrollForTitleTransform, 1);
      setScrollProgress(titleProgress);
      
      // 计算内容位置的逻辑
      let newStyle: React.CSSProperties = {};
      
      // 内容高度和底部安全区域（防止内容太靠近容器底部）
      const contentHeight = contentRect.height;
      const bottomSafetyMargin = 50; // 底部安全边距，单位px
      
      if (heroRect.top <= 0) {
        // 当Hero的顶部已滚出视野时
        if (heroRect.bottom >= contentHeight + bottomSafetyMargin) {
          // 如果Hero的底部距离足够显示内容+安全区域
          newStyle = {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%'
          };
        } else {
          // 当Hero的底部距离不足以舒适显示内容时
          // 计算内容应该往上移动的距离，确保内容在到达底部前开始移动
          const offsetY = heroRect.bottom - contentHeight - bottomSafetyMargin;
          newStyle = {
            position: 'fixed',
            top: `${Math.min(0, offsetY)}px`, // 不应该是正值
            left: 0,
            width: '100%'
          };
        }
      } else {
        // Hero的顶部仍在视野内，内容保持在Hero内的相对位置
        newStyle = {
          position: 'relative',
          top: 'auto',
          left: 'auto'
        };
      }
      
      setContentStyle(newStyle);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化
    
    // 确保组件卸载时移除事件监听
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  const titleContainerStyle: React.CSSProperties = {
    textAlign: scrollProgress < 0.1 ? 'center' : 'left',  // 降低这个值会使标题在更早的滚动阶段开始左对齐
    transform: scrollProgress < 0.3 
      ? `translateX(${-50 * scrollProgress}%)` 
      : 'translateX(0)',
    transition: 'all 1.0s cubic-bezier(0.165, 0.84, 0.44, 1)'
  };

  // 标题第一部分的样式
  const firstLineStyle: React.CSSProperties = {
    opacity: 1,
    fontSize: `calc(4rem + ${scrollProgress < 0.5 ? 1 : 0}rem)`, // 字体大小随滚动变化
    display: 'inline-block',
    marginRight: scrollProgress < 0.5 ? '0.5rem' : '0',
    transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)'
  };

  // 标题第二部分的样式
  const secondLineStyle: React.CSSProperties = {
    opacity: 1,
    fontSize: `calc(4rem + ${scrollProgress < 0.5 ? 1 : 0}rem)`,
    display: scrollProgress < 0.5 ? 'inline-block' : 'block',
    transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)'
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
        className="z-20 w-full px-6 md:px-12 pt-10"
        style={contentStyle}
      >
        <div style={titleContainerStyle}>
          {/* 标题始终保持两部分，但样式随滚动变化 */}
          <h2 className={`font-semibold ${textColorClass}`} style={firstLineStyle}>
            {firstLine}
          </h2>
          <h2 className={`font-semibold ${textColorClass}`} style={secondLineStyle}>
            {secondLine}
          </h2>
          
          <h3 className={`text-xl md:text-2xl lg:text-3xl font-medium ${textColorClass} transition-all duration-500`}
               style={{
                 textAlign: scrollProgress < 0.3 ? 'center' : 'left',
                 transition: 'all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)'
               }}>
            {subtitle}
          </h3>
          
          {description && (
            <p className={`mt-3 text-base md:text-lg ${textColorClass} transition-all duration-500`}
               style={{
                 textAlign: scrollProgress < 0.5 ? 'center' : 'left',
                 transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)'
               }}>
              {description}
            </p>
          )}

          {/* Links */}
          {(primaryLink || secondaryLink) && (
            <div className={`flex items-center space-x-7 mt-4 transition-all duration-500`}
                 style={{
                   justifyContent: scrollProgress < 0.5 ? 'center' : 'flex-start',
                   transition: 'all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)'
                 }}>
              {primaryLink && (
                <Link
                  href={primaryLink.url}
                  className="text-apple-link-blue text-xl hover:underline flex items-center"
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
                  className="text-apple-link-blue text-xl hover:underline flex items-center"
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
      
      {/* Background image */}
      <div className={`absolute z-10 overflow-hidden ${getImageContainerClass()}`}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Optional tag line */}
      <div className="absolute bottom-5 w-full text-center z-20">
        <p className={`text-sm ${textColorClass}`}>@CardioVision Lab.</p>
      </div>
    </div>
  );
}