'use client'
import Layout from "../../components/layout/Layout";
import Hero from "../../components/ui/Hero";
import Image from "next/image";
import { useState } from "react";
import 'katex/dist/katex.min.css'; // 导入KaTeX CSS
import { InlineMath } from 'react-katex';

export default function ResearchDirections() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const openImageModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsImageModalOpen(true);
  };
  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };
  const BoldItalic = ({ children }: { children: React.ReactNode }) => (
    <span className="font-bold italic">{children}</span>
  );
  return (
    <Layout>

      {/* First Research Direction */}
      <section id="next-gen-cmr" className="py-12  bg-gray-100">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Next-Generation Cardiac MRI
            </h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Developing comprehensive high-resolution Cardiac MRI techniques intergrated with artificial intelligence
              </p>
          </div>
          
          <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-8"> Free-breathing Multi-Parametric Mapping</h3>

          {/* 3D B1+ correction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch my-10">
            <div className="order-1 md:order-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  3D B1+ corrected simultaneous myocardial T1 and T1<InlineMath math={"\\rho"} /> mapping with subject-specific respiratory motion correction and water-fat separation
                  </h2>
                  <p className="text-gray-700">
                  Our Free-Breathing 3D Whole-Heart Simultaneous T1 and T1<InlineMath math={"\\rho"} /> Quantification technique integrates IR and T1<InlineMath math={"\\rho"} /> pulses, dual-echo Dixon acquisition, and diaphragm navigation for motion tracking. Combined with our <i>SubNdMoCo</i> non-rigid motion correction and dictionary-based multicontrast matching, this approach delivers precise T1, T1<InlineMath math={"\\rho"} />, and B1+ maps with enhanced efficiency and robustness for cardiac diagnostics.
                  </p>
                </div> 
              </div>
            </div>
            <div className="order-2 md:order-2 flex flex-col h-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl cursor-pointer transform transition hover:scale-105 h-full flex flex-col" onClick={() => openImageModal("/images/research/B1.png")}>
                <div className="bg-white rounded-xl overflow-hidden shadow-2xl cursor-pointer transform transition hover:scale-105" onClick={() => openImageModal("/images/research/B1.png")}>
                  <div className="flex justify-center">
                    <Image
                      src="/images/research/B1.png"
                      alt="3D B1+ correction"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-auto h-auto"
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500">
                      Click to see the zoomed-in pipeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*FB-MultiMap*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch my-10">
            <div className="order-3 md:order-3">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Free-breathing simultaneous native myocardial T1, T2 and T1<InlineMath math={"\\rho"} /> mapping with Cartesian acquisition and dictionary matching
                  </h2>
                  <p className="text-gray-700">
                  We developed <i>FB-MultiMap</i>, a free-breathing technique that simultaneously quantifies T1, T2, and T1<InlineMath math={"\\rho"} /> parameters in a single scan. This innovation significantly enhances cardiac MRI efficiency, patient comfort, and diagnostic accuracy, eliminating the prolonged exams, patient discomfort, and misaligned scans associated with traditional multiple breath-hold methods.
                  </p>
                </div> 
              </div>
            </div>
            <div className="order-4 md:order-4 flex flex-col h-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl cursor-pointer transform transition hover:scale-105 h-full flex flex-col" onClick={() => openImageModal("/images/research/multimap_full.jpg")}>
                <div className="relative flex-grow" style={{ minHeight: "100px" }}>
                  <Image
                    src="/images/research/multimap_small.jpg"
                    alt="3D high-resolution cardiac MRI"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="p-6 mt-auto">
                  <p className="text-sm text-gray-500">
                    Click to see the full pipeline of <i>FB-MultiMap</i>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*FB-MultiMap for myocardial fibrosis*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch my-10">
            <div className="order-5 md:order-5">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Free-breathing non-contrast T1<InlineMath math={"\\rho"} /> dispersion magnetic resonance imaging of myocardial interstitial fibrosis in comparison with extracellular volume fraction
                  </h2>
                  <p className="text-gray-700">
                  We introduced <i>FB-MultiMap</i> for diagnosing diffuse myocardial fibrosis without gadolinium-based contrast agents. This method simultaneously quantifies T2, T1<InlineMath math={"\\rho"}/>, and myocardial fibrosis index in a single scan, enhancing diagnostic accuracy beyond traditional contrast-enhanced MRI techniques.
                  </p>
                </div> 
              </div>
            </div>
            <div className="order-6 md:order-6 flex flex-col h-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl cursor-pointer transform transition hover:scale-105 h-full flex flex-col" onClick={() => openImageModal("/images/research/FBMp_MIB.jpg")}>
                <div className="relative flex-grow" style={{ minHeight: "100px" }}>
                  <Image
                    src="/images/research/FBMp_MIB.jpg"
                    alt="3D high-resolution cardiac MRI"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-auto"
                    style={{ maxWidth: '100%' }}
                  />
                </div>
                <div className="p-6 mt-auto">
                  <p className="text-sm text-gray-500">
                    Click to see detailed results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-8"> AI Empowered Cardiac MRI Analysis and Diagnosis</h3>

          {/*SRMapping*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch my-10">
            <div className="order-7 md:order-7">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  SRMapping: A super-resolution network with multi-level fine-grained feature fusion for cardiac MR T1 mapping
                  </h2>
                  <p className="text-gray-700">
                  We developed <i>SRMapping</i>: a transformer-based network that simultaneously performs super-resolution and quantitative T1 mapping for low-resolution Cardiac MR T1 acquisitions. This approach addresses challenges such as motion blurring, compromised spatial resolution, and noise sensitivity in traditional methods.
                  </p>
                </div> 
              </div>
            </div>
            <div className="order-8 md:order-8 flex flex-col h-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl cursor-pointer transform transition hover:scale-105 h-full flex flex-col" onClick={() => openImageModal("/images/research/SRMapping.jpg")}>
                <div className="relative flex-grow" style={{ minHeight: "100px" }}>
                  <Image
                    src="/images/research/SRMapping_small.jpg"
                    alt="3D high-resolution cardiac MRI"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-auto"
                    style={{ maxWidth: '100%' }}
                  />
                </div>
                <div className="p-6 mt-auto">
                  <p className="text-sm text-gray-500">
                    Click to see the full pipeline of <i>SRMapping</i>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*CGE*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch my-10">
            <div className="order-9 md:order-9">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Predicting Late Gadolinium Enhancement of Acute Myocardial Infarction in Contrast-Free Cardiac Cine MRI Using Deep Generative Learning
                  </h2>
                  <p className="text-gray-700">
                  We proposed <i>CGE</i>, a deep learning framework that transforms conventional Cardiac MRI cine sequences into synthetic contrast-equivalent LGE-like images, eliminating the need for gadolinium agents entirely. This technique demonstrated exceptional diagnostic accuracy for acute myocardial infarction, matching or exceeding traditional contrast-enhanced methods. By significantly reducing examination time and removing contrast-associated risks, our approach opens up a new avenue for rapid and non-invasive diagnosis of myocardial infarction, which is of great clinical value.
                  </p>
                </div> 
              </div>
            </div>
            <div className="order-10 md:order-10 flex flex-col h-full">
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl cursor-pointer transform transition hover:scale-105 h-full flex flex-col" onClick={() => openImageModal("/images/research/cge.jpg")}>
                <div className="relative flex-grow" style={{ minHeight: "100px" }}>
                  <Image
                    src="/images/research/cge_small.jpg"
                    alt="3D high-resolution cardiac MRI"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-auto"
                    style={{ maxWidth: '100%' }}
                  />
                </div>
                <div className="p-6 mt-auto">
                  <p className="text-sm text-gray-500">
                    Click to see the full graphic abstract of <i>CGE</i>.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/*Transition Section*/}
      {/* <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <div className="relative h-64 w-full mb-10">
            <Image
              src=".jpg"
              alt="From Diagnosis to Treatment"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Transition
          </h2>
          <p className="text-xl text-gray-700">
            Our research spans the complete clinical pathway, from advanced diagnostic imaging to real-time treatment guidance.
          </p>
        </div>
      </section> */}

      {/* Second Research Direction */}
      <section id="accelerating-mr" className="py-24 bg-black text-white">

        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Pushing MRI Speed Limits
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Developing fast MRI techniques for real-time guidance during cardiac interventions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-stretch">
            <div className="order-2 md:order-1">
              <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
                <div className="relative h-96 w-full">
                  <Image
                  src="/images/research/3DSpiral3.gif"
                  alt="Real-time MRI guided intervention"
                  layout="fill"
                  objectFit="contain"
                  unoptimized={true}
                  />
                </div>
                <div className="px-6 pt-2 pb-6">
                  <p className="text-sm text-gray-400 italic text-center">
                    A new 3D spiral trajectory for real-time MRI guidance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="space-y-8">
                <div className="order-2 md:order-1">
                  <h3 className="text-3xl font-semibold mb-3">
                    Non-cartesian Trajectory
                  </h3>
                  <p className="text-gray-300">
                    Our fast acquisition techniques enable continuous imaging during interventions, providing doctors with immediate visual feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start my-10">
            <div className="flex flex-col space-y-6 order-4 md:order-3">
              <div className="grid grid-cols-2 gap-4">
                {/* 第一张图片 */}
                <div className="flex flex-col">
                  <div className="relative aspect-square w-full bg-black rounded-lg overflow-hidden">
                    <Image
                      src="/images/research/realtime_nufft.gif"
                      alt="Spiral trajectory"
                      layout="fill"
                      objectFit="contain"
                      unoptimized={true}
                    />
                  </div>
                  <p className="text-sm text-gray-400 italic text-center mt-2">
                   spiral trajectory 3 interleave per frame reconstruction with nufft
                  </p>
                </div>
                
                {/* 第二张图片 */}
                <div className="flex flex-col">
                  <div className="relative aspect-square w-full bg-black rounded-lg overflow-hidden">
                    <Image
                      src="/images/research/realtime_DL.gif"
                      alt="Guidance visualization"
                      layout="fill"
                      objectFit="contain"
                      unoptimized={true}
                    />
                  </div>
                  <p className="text-sm text-gray-400 italic text-center mt-2">
                  spiral trajectory 3 interleave per frame reconstruction with deeplearning model
                  </p>
                </div>
              </div>
            </div>
  
            {/* 右侧文字部分 */}
            <div className="order-3 md:order-4">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-semibold mb-3">
                    Accelerated Reconstruction
                  </h3>
                  <p className="text-gray-300">
                    We employ advanced algorithms that reconstruct high-quality images from significantly undersampled data, dramatically reducing scan times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Publications */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Representative Publications
            </h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Selected works highlighting our contributions to the field
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Publication 1 */}
            <a 
              href="https://mp.weixin.qq.com/s/MlfQrf4zu8yiXmuwwwi7pg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block transition transform hover:scale-105"
            >
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/research/publication1.jpg"
                  alt="Publication 1"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-gray-900">
                Free-breathing simultaneous native myocardial T1, T2 and T1<InlineMath>{"\\rho"}</InlineMath> mapping with Cartesian acquisition and dictionary matching
                </h3>
                {/* <p className="text-gray-700 mb-4">
                  Novel approach for comprehensive tissue characterization in a single efficient scan.
                </p> */}
                <p className="text-sm text-gray-500 flex items-center">
                  Published in JCMR, 2023
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
            
            {/* Publication 2 */}
            <a 
              href="https://mp.weixin.qq.com/s/N1SueU7ynrBiwecObp2wWA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block transition transform hover:scale-105"
            >
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/research/publication2.jpg"
                  alt="Publication 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-gray-900">
                Free-breathing non-contrast T1<InlineMath>{"\\rho"}</InlineMath> dispersion magnetic resonance imaging of myocardial interstitial fibrosis in comparison with extracellular volume fraction
                </h3>
                {/* <p className="text-gray-700 mb-4">
                  Novel approach for comprehensive tissue characterization in a single efficient scan.
                </p> */}
                <p className="text-sm text-gray-500 flex items-center">
                  Published in JCMR, 2024
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
            
            {/* Publication 3 */}
            <a 
              href="https://mp.weixin.qq.com/s/sSm5ymD2CN4VoqRY2QZR-g" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block transition transform hover:scale-105"
            >
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src="/images/research/publication3.jpg"
                  alt="Publication 3"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-gray-900">
                Predicting Late Gadolinium Enhancement of Acute Myocardial Infarction in Contrast-Free Cardiac Cine MRI Using Deep Generative Learning
                </h3>
                {/* <p className="text-gray-700 mb-4">
                  Novel approach for comprehensive tissue characterization in a single efficient scan.
                </p> */}
                <p className="text-sm text-gray-500 flex items-center">
                  Published in CCI, 2024
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </p>
              </div>
            </div>
          </a>
          </div>
          
          <div className="text-center mt-12">
            <a href="/publications" className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-300">
              View All Publications
            </a>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      {/* <section className="py-24 bg-gray-100">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Infrastructure
            </h2>
            <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Cutting-edge facilities powering our research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                MRI Facilities
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Two 3T clinical MRI scanners dedicated to research</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>One 5T experimental MRI system via Air Lab</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced RF coil array systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>MRI-compatible physiological monitoring systems</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Computing Resources
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>In-house GPU cluster (4 RTX 3090, 1 A6000)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Access to BME College's HPC cluster with A100 GPUs</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated image processing workstations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-900 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Large-scale data storage systems for research data</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Research
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Interested in advancing cardiac MRI technology? We're always looking for passionate researchers to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contactus#contact-form" className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </a>
            {/* <a href="/opportunities" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
              View Opportunities
            </a> */}
          </div>
        </div>
      </section>
      {isImageModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4" 
                  onClick={closeImageModal}>
                <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
                  <button 
                    className="absolute top-2 right-2 bg-white rounded-full p-2 z-10"
                    onClick={closeImageModal}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="relative w-full h-[80vh]">
                    <Image
                      src={modalImage}
                      alt="Enlarged image"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            )}
    </Layout>
  );
}