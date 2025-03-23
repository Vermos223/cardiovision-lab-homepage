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
      description: 'Zhenfeng Lyu (also spelled as Zhenfeng Lv) is a Ph.D. candidate focusing on developing free-breathing simultaneous cardiac multi-parametric mapping techniques.'
    },
    {
      icon: '/images/members/qinfangmiao.jpg',
      title: 'Qinfang Miao',
      description: 'Qinfang Miao is a Ph.D. candidate with a background in clinical medicine. Her research focuses on designing and applying novel cardiac MR techniques to the diagnosis of complex cardiac diseases. She is also experienced in cardiac MR of small animals.'
    }
  ];

  const MDStudents = [
    {
      icon: '/images/members/chunliu.jpg',
      title: 'Chun Liu',
      description: 'Chun Liu is a master student focusing on enhancing the efficiency and accuracy of cardiac MR imaging through innovative computational approaches.'
    },
    {
      icon: '/images/members/ruiluo.jpg',
      title: 'Rui Luo',
      description: 'Rui Luo is a master student with strong background in engineering and mathematics. He is working on developing novel sampling trajectories and non-Cartesian MR reconstruction.'
    },
    {
      icon: '/images/members/hanxiliao.jpg',
      title: 'Hanxi Liao',
      description: 'Hanxi Liao is a master student with research interest in developing advanced deep learning models for cardiac MR including reconstruction, super-resolution and virtual native enhancement.'
    },
    {
      icon: '/images/members/hongzhanghuang.jpg',
      title: 'Hongzhang Huang',
      description: 'Hongzhang Huang is a master student with rich experience in pulse sequence design and motion correction. He is working on developing free-running cardiac MRI techniques.'
    },
    {
      icon: '/images/members/yimingzhu.jpg',
      title: 'Yiming Zhu',
      description: 'Yiming Zhu is a master student working on medical image synthesis.'
    },
    {
      icon: '/images/members/yujiechen.jpg',
      title: 'Yujie Chen',
      description: 'Yujie Chen is a master student focusing on motion correction in cardiac MR.'
    },
    {
      icon: '/images/members/jianqiuwu.jpg',
      title: 'Jianqiu Wu',
      description: 'Jianqiu Wu is a master student focusing on real-time MR reconstruction.'
    }
  ];
  const Graduated = [
    {
      icon: '/images/members/pengfangqian.jpg',
      title: 'Pengfang Qian',
      description: 'Pengfang Qian stayed in this group from 2021 to 2024. He was working on applying AI to enhance the performance of cardiac MR. He had developed a novel unified deep learning model for cardiac cine reconstruction, segmentation and motion estimation. The CGE (cine generated enhancement) model developed by him laid the foundation for the following technique development in this direction. After the master degree, he pursued a career in AI.'
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
        <section className="pt-4 pb-4 lg:pt-8 lg:pb-8 bg-white">
          <div className="normal-container">
            <h2 className="text-3xl font-bold text-center mb-6 lg:mb-12">Principal Investigator</h2>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 items-center lg:items-start">
              {/* 导师照片 */}
              <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative aspect-square w-48 lg:w-full max-w-sm overflow-hidden rounded-lg">
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
        title="PhD Students"
        features={PHDStudents}
        bgColor="#f5f5f7"
        iconSize={144}
      />
      {/* MD Student */}
      <FeatureShowcase
        title="Master Students"
        features={MDStudents}
        bgColor="#f5f5f7"
        iconSize={144}
      />
      {/* Graduated Student */}
      <FeatureShowcase
        title="Graduated Students"
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
              <h3 className="font-semibold text-xl mb-2">Abundant Resources</h3>
              <p className="text-gray-600 text-sm">
                High-end MR 3.0T, 5.0T and 9.4T MR scanners for research; powerful CPU and GPU computing resources; close cooperation with industry and hospitals.
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
                Benefit from a kind of mentorship that balances between supervision and independence. Our team emphasizes development of engineering skills, industrial and clinical connections, and training of scientific writing and presentation, which are vital for future career development.
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
                Join a collaborative environment where ideas can be easily communicated and everyone's contributions are valued. We foster a warm, inclusive atmosphere with flexible scheduling, open communication, and regular social gatherings that build genuine connections beyond research.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
