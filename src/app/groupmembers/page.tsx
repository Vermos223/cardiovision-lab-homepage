'use client'
import React from 'react';
import Layout from '../../components/layout/Layout';
import StickyProductNav from '../../components/layout/StickyProductNav';
import ProductComparison from '../../components/ui/ProductComparison';
import FeatureShowcase from '../../components/ui/FeatureShowcase';
import Hero from '../../components/ui/Hero';
import Image from 'next/image';
import Link from 'next/link';
import ImageSlideshow from './imageslide';
import GlobalImage from '../../components/common/GlobalImage';

export default function IPhonePage() {
  const PHDStudents = [
    {
      icon: '/images/members/zhenfenglv.jpg',
      title: 'Zhenfeng Lyu',
      description: 'Zhenfeng Lyu (also spelled as Zhenfeng Lv) is currently a second-year Ph.D. student focusing on Free-Breathing Cardiac Simultaneous Multi-Parametric Mapping MRI Technology. His research aims to develop advanced Cardiac MRI techniques to enable simultaneous measurement of multiple parameters (e.g., T1, T2, T1rho, and fat fraction) without breath-holding, enhancing patient comfort, improving acquisition efficiency, and thereby increasing the clinical applicability of quantitative cardiac MRI imaging. '
    },
    {
      icon: '/images/members/qinfangmiao.jpg',
      title: 'Qinfang Miao',
      description: 'Qinfang Miao is a first-year Ph.D. student with a background in Clinical Medicine. Her research focuses on MRI post-processing and clinical applications of various pulse sequences, including T1/T2 mapping, and arterial spin labeling (ASL). She works across multiple field strength platforms, including 3T, 5T, and 9.4T MRI systems. Drawing on her clinical medicine background, she is dedicated to bridging advanced MRI technology with clinical practice, while actively expanding her expertise into pulse sequence development to build stronger connections between MRI technical innovation and clinical applications..'
    }
  ];

  const MDStudents = [
    {
      icon: '/images/members/chunliu.jpg',
      title: 'Chun Liu',
      description: 'Chun Liu is a third-year master student specializing in deep learning-based accelerated imaging for cardiac quantitative magnetic resonance. Her research focuses on enhancing the efficiency and accuracy of cardiac MR imaging through innovative computational approaches.'
    },
    {
      icon: '/images/members/ruiluo.jpg',
      title: 'Rui Luo',
      description: 'A postgraduate student focusing on non-Cartesian pulse sequence development and reconstruction. A postgraduate student focusing on non-Cartesian pulse sequence development and reconstruction.'
    },
    {
      icon: '/images/members/hanxiliao.jpg',
      title: 'Hanxi Liao',
      description: 'My research centers on deep learning based medical image analysis. Specifically, I leverage generative models to tackle visual tasks in MRI, including reconstruction and super-resolution. My current work focuses on virtual enhancement generation and diagnostic modeling for hypertrophic cardiomyopathy based on non-contrast CMR sequences.'
    },
    {
      icon: '/images/members/hongzhanghuang.jpg',
      title: 'Hongzhang Huang',
      description: 'A postgraduate student focusing on free-breathing quantitative cardiac MRI techniques.'
    },
    {
      icon: '/images/members/yimingzhu.jpg',
      title: 'Yiming Zhu',
      description: 'A master student focusing on deep learning based medical image synthesis.'
    },
    {
      icon: '/images/members/yujiechen.jpg',
      title: 'Yujie Chen',
      description: 'A postgraduate student focusing on MRI sequence design.'
    },
    {
      icon: '/images/members/jianqiuwu.jpg',
      title: 'Jianqiu Wu',
      description: 'A master student focusing on MRI Reconstruction.'
    }
  ];
  const Graduated = [
    {
      icon: '/images/members/pengfangqian.jpg',
      title: 'Pengfang Qian',
      description: 'He is the first senior student in our research group. His research focuses on deep learning-based image analysis and multi-task models including motion estimation, segmentation, and reconstruction. Additionally, he was the first member in our group to conduct virtual enhancement research achieving impressive research outcomes, and also he established foundational work that influenced other students in our group. Upon graduation, he was recognized as an Outstanding Graduate.'
    },
  ];

  return (
    <Layout>
      <ImageSlideshow
      images={[
        '/images/gallery/ismrm24.jpg',
        '/images/gallery/ismrm_miao.jpg',
        '/images/gallery/lv.jpg',
        '/images/gallery/withhulab.jpg',
        // 添加放入gallery的图片路径
      ]}
      title="Lab Members"
      subtitle="Meet our talented research team."
      darkText={false}
      bgColor="#f5f5f7"
      interval={15000} // 15秒切换一次
      />
        {/* 导师介绍区块 */}
        <section className="pt-8 pb-8 bg-white">
          <div className="normal-container">
            <h2 className="text-3xl font-bold text-center mb-12">Principal Investigator</h2>
            <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
              {/* 导师照片 */}
              <div className="w-full lg:w-1/3">
                <div className="relative aspect-square max-w-sm mx-auto overflow-hidden rounded-lg">
                  <GlobalImage 
                    src="/images/members/haikunqi.jpg" 
                    alt="Dr. Haikun Qi" 
                    width={150} 
                    height={150} 
                    className="object-cover"
                  />
                </div>
              </div>
              
              {/* 导师介绍 */}
              <div className="w-full lg:w-2/3">
                <h3 className="text-2xl font-semibold mb-2">Haikun Qi</h3>
                <p className="text-gray-600 mb-2">Assistant Professor, School of Biomedical Engineering</p>
                {/* <p className="text-gray-600 mb-6">Principal Investigator, CMR Lab, ShanghaiTech University</p> */}
                
                <div className="space-y-4">
                  <p className="text-gray-800">
                    Dr. Qi focuses on developing fast and quantitative MRI techniques for cardiovascular diseases evaluation. Her work includes next-generation cardiovascular MRI techniques, such as 3D high-resolution single-sequence multi-modality cardiac MRI and applying deep learning to enhance data acquisition, motion correction, image reconstruction, and disease diagnosis.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Education & Employment</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>Ph.D., Biomedical Engineering, Tsinghua University, 2018</li>
                        <li>Post-Doctoral Fellow, King's College London, UK, 2018-2021</li>
                        <li>Assistant Professor, ShanghaiTech University, 2021-present</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Selected Achievements</h4>
                      <ul className="list-disc pl-5 text-gray-700 space-y-1">
                        <li>ISMRM Magna Cum Laude Merit Awards (2017, 2019, 2020)</li>
                        <li>SMRA First Potchen-Passariello Award, 2020</li>
                        <li>Young Leading Talent of Shanghai, 2022</li>
                        <li>MRM Distinguished Reviewer (2023, 2024)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-gray-800">
                      Dr. Qi serves as a committee member of the Society for Cardiovascular Magnetic Resonance (SCMR) and is a regular member of ISMRM and SMRA. He actively contributes as a reviewer for leading journals in the field including MRM, JCMR, and IEEE Trans Med Imaging.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* PhD Student */}
      <FeatureShowcase
        title="PhD Students."
        features={PHDStudents}
        bgColor="#f5f5f7"
        iconSize={144}
      />
      {/* MD Student */}
      <FeatureShowcase
        title="Master Students."
        features={MDStudents}
        bgColor="#f5f5f7"
        iconSize={144}
      />
      {/* Graduated Student */}
      <FeatureShowcase
        title="Graduated Students."
        features={Graduated}
        bgColor="#f5f5f7"
        iconSize={144}
      />

      {/* Why Join Us */}
      <section className="bg-white py-12">
        <div className="normal-container">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                  <line x1="6" y1="14" x2="6" y2="17"></line>
                  <line x1="12" y1="14" x2="12" y2="17"></line>
                  <line x1="18" y1="14" x2="18" y2="17"></line>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Cutting-Edge Resources</h3>
              <p className="text-gray-600 text-sm">
              Access to world-class infrastructure including advanced 3T, 5T and 9.4T MRI scanners, powerful GPU computing resources, and dedicated HPC clusters with A100 GPUs for deep learning research, providing all the tools needed for breakthrough discoveries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Mentorship & Growth</h3>
              <p className="text-gray-600 text-sm">
                Benefit from a hands-on mentorship approach that balances guidance with independence. Our team emphasizes practical skills development, industry connections, and publication opportunities, helping you build a strong foundation for your research career.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#505050" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2">Supportive Lab Culture</h3>
              <p className="text-gray-600 text-sm">
                Join a collaborative environment where ideas flow freely and everyone's contributions are valued. We foster a warm, inclusive atmosphere with flexible scheduling, open communication, and regular social gatherings that build genuine connections beyond research.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
