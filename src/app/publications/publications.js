export const Publications = [
    {
      id: 1,
      title: "Free-breathing non-contrast T1$$\\rho$$ dispersion magnetic resonance imaging of myocardial interstitial fibrosis in comparison with extracellular volume fraction",
      authors: "Q Miao, S Hua, Y Gong, Z Lyu, P Qian, C Liu, W Jin, P Hu, H Qi",
      journal: "Journal of Cardiovascular Magnetic Resonance",
      year: 2024,
      month:10,
      type: "journal",
      image: "/images/publication/1.jpg",
      abstract: "**Background**\nMyocardial fibrosis is a common feature in various cardiac diseases. It causes adverse cardiac remodeling and is associated with poor clinical outcomes. Late gadolinium enhancement (LGE) and extracellular volume fraction (ECV) are the standard magnetic resonance imaging techniques for detecting focal and diffuse myocardial fibrosis. However, these contrast-enhanced techniques require the administration of gadolinium contrast agents, which is not applicable to patients with gadolinium contraindications. To eliminate the need for contrast agents, we developed and applied an endogenous free-breathing T1$$\\rho$$ dispersion imaging technique (FB-MultiMap) for diagnosing diffuse myocardial fibrosis in a cohort with suspected cardiomyopathies.\n\n**Methods**\nThe proposed FB-MultiMap technique, enabling T2, T1$$\\rho$$, and their difference (myocardial fibrosis index [mFI]) quantification in a single scan was developed in phantoms and 15 healthy subjects. In the clinical study, 55 patients with suspected cardiomyopathies were imaged using FB-MultiMap, conventional native T1 mapping, LGE, and ECV imaging. The accuracy of the endogenous parameters for predicting increased ECV was evaluated using receiver operating characteristic curve analysis. In addition, the correlation of native T1, T1$$\\rho$$, and mFI with ECV was, respectively, assessed using Pearson correlation coefficients.\n\n**Results**\nFB-MultiMap showed a good agreement with conventional separate breath-hold mapping techniques in phantoms and healthy subjects. Considering all the patients, T1$$\\rho$$ was more accurate than mFI and native T1 for predicting increased ECV, with area under the curve (AUC) values of 0.91, 0.79, and 0.75, respectively, and showed a stronger correlation with ECV (correlation coefficient r: 0.72 vs 0.52 vs 0.40). In the subset of 47 patients with normal T2 values, the diagnostic performance of mFI was significantly strengthened (AUC=0.90, r=0.83), outperforming T1$$\\rho$$ and native T1.\n\n**Conclusion**\nThe proposed free-breathing T1$$\\rho$$ dispersion imaging technique enabling simultaneous quantification of T2, T1$$\\rho$$, and mFI in a single scan has shown great potential for diagnosing diffuse myocardial fibrosis in patients with complex cardiomyopathies without contrast agents.",
      links: [
        { label: "PDF", url: "/publications/paper1.pdf" },
        { label: "LINK", url: "https://doi.org/10.1016/j.jocmr.2024.101093" }
      ]
    },
    {
      id: 2,
      title: "Diagnostic value of diffusion-weighted MR imaging in acute myocardial infarction",
      authors: "Zhenfeng Lv, Lianming Wu, Jilei Zhang, Weibo Chen, Haikun Qi",
      journal: "ISMRM, 2022",
      year: 2022,
      month:6,
      type: "abstract",
      image: "/images/publication/2.jpg",
      abstract: "Diffusion-weighted imaging (DWI), being able to detect the diffusion of water molecules in the tissue, is one of the potential techniques for the diagnosis of myocardial infarction without contrast agent administration. In this study, we investigated the diagnostic value of the mono-exponential and stretched exponential DWI model in the assessment of acute myocardial infarction. The preliminary results from 10 patients showed that the diffusion parameters were significantly lower in the infarcted region, and both models had capability of diagnosing acute myocardial infarction with the stretched exponential model performing slightly better.",
      links: [
        { label: "PDF", url: "/publications/paper2.pdf" },
        { label: "LINK", url: "https://archive.ismrm.org/2022/4118.html" }
      ]
    },
    {
      id: 3,
      title: "A unified deep learning model for simultaneous cardiac cine MRI reconstruction, motion estimation and segmentation",
      authors: "Pengfang Qian, Junwei Yang, Zijian Zhou, Peng Hu, Haikun Qi",
      journal: "ISMRM, 2023",
      year: 2023,
      month:6,
      type: "abstract",
      image: "/images/publication/3.jpg",
      abstract: "Various deep learning methods have been proposed for cardiac cine MRI, including accelerated image reconstruction, cardiac motion estimation and segmentation, which are traditionally considered as separate tasks without exploiting the inter-task correlation. In this study, we propose a unified deep learning model to perform accelerated cine image reconstruction, motion estimation and segmentation simultaneously in an iterative framework, where correlations between tasks are exploited by compensating motion in reconstruction, semi-supervising segmentation using pseudo-labels generated by motion and improving motion estimation using intermediately reconstructed images. Experiment results show that the multi-task model outperformed single-task networks.\n**Keywords:** Image Reconstruction, Machine Learning/Artificial Intelligence",
      links: [
        { label: "PDF", url: "/publications/paper3.pdf" },
        { label: "LINK", url: "https://archive.ismrm.org/2023/0711.html" }
      ]
    },
    {
      id: 4,
      title: "Deep-learning-based optimization of k-space undersampling in self-supervised MRI reconstruction",
      authors: "Chun Liu, Peng Hu, Haikun Qi",
      journal: "ISMRM, 2024",
      year: 2024,
      month:5,
      type: "abstract",
      image: "/images/publication/4.jpg",
      abstract: "**Keywords:** AI/ML Image Reconstruction, Image Reconstruction\n**Motivation:** Self-supervised deep learning has shown good performance in reconstructing undersampled k-space. While recent developments focus on improving reconstruction performance for a given undersampling pattern, there is limited research aiming to learn and optimize k-space sampling strategies to offer a performance gain in self-supervised reconstruction.\n**Goal(s):** To design a deep learning framework to optimize the sampling pattern in self-supervised MRI reconstruction.\n**Approach:** An Auto Mask Module was optimized simultaneously with the self-supervised reconstruction module in an end-to-end framework.\n**Results:** The proposed method can achieve better reconstruction results than self-supervised methods based on fixed masks.\n**Impact:** The proposed method can produce better self-supervised reconstruction results by optimizing the k-space undersampling pattern.",
      links: [
        { label: "PDF", url: "/publications/paper4.pdf" },
        { label: "Link", url: "https://archive.ismrm.org/2024/4507_FouJyYQyz.html" }
      ]
    },
    {
      id: 5,
      title: "Myocardial Tissue Characterization of Acute Myocarditis in Mice: T1, T2 mapping and Extracellular Volume Fraction at 9.4T",
      authors: "Qinfang Miao, Wenjing Zhao, Zhaoying Wen, Haikun Qi",
      journal: "ISMRM, 2024",
      year: 2024,
      month:5,
      type: "abstract",
      image: "/images/publication/5.jpg",
      abstract: "**Keywords:** Small Animals, Preclinical\n**Motivation:** Myocarditis causes adverse ventricular remodeling. However, its early diagnosis and intervention measures remain to be explored.\n**Goal(s):** Exploring quantitative CMR for monitoring myocarditis developments.\n**Approach:** Cardiac T1, T2 and ECV mapping were performed in mice at two timepoints. Then the CMR parameters were compared between the control and myocarditis groups. The CMR results were validated against histology.\n**Results:** Early acute phase of myocarditis was characterized by increased T2 and ECV. As time progressed, T2 was reduced to the normal level, while myocarditis native T1 and ECV were much higher than the control. The CMR findings agreed with histology.\n**Impact:** Quantitative CMR parameters may serve as reliable indicators for edema, inflammation and fibrosis that are associated with the progression of myocarditis, and can be used for early diagnosis, monitoring and management of myocarditis.",
      links: [
        { label: "PDF", url: "/publications/paper5.pdf" },
        { label: "LINK", url: "https://archive.ismrm.org/2024/3947_YN62buQr2.html" }
      ]
    },
    {
      id: 6,
      title: "Cardiac Cine MRI Super-Resolution based on Diffusion Models",
      authors: "Hanxi Liao, Chun Liu, Peng Hu, Haikun Qi",
      journal: "ISMRM, 2024",
      year: 2024,
      month:5,
      type: "abstract",
      image: "/images/publication/6.jpg",
      abstract: "**Keywords:** AI Diffusion Models, Machine Learning/Artificial Intelligence\n**Motivation:** Cardiac cine MRI requires multiple breath-holds to cover the left ventricle. Acquiring images of small matrix size effectively reduces acquisition time but causes a loss of spatial details.\n**Goal(s):** To further research on the application of diffusion models in accelerating Cardiac cine MRI.\n**Approach:** A diffusion model was constructed to achieve super-resolution of cardiac cine MRI to restore lost details in low-resolution images.\n**Results:** The proposed diffusion model based super-resolution method can recover high-frequency details for cardiac cine MRI and outperformed the state-of-the-art generative adversarial super-resolution network.\n**Impact:** The proposed method yielding good-quality cardiac cine images from low-resolution images helps to accelerate cardiac cine MRI and could be potentially applied to achieve high spatial-temporal real-time cardiac MRI.",
      links: [
        { label: "PDF", url: "/publications/paper6.pdf" },
        { label: "LINK", url: "https://archive.ismrm.org/2024/1752_Qje3AiPwX.html" }
      ]
    },
    {
      id: 7,
      title: "High-resolution free-breathing simultaneous myocardial T1, T2 and T1$$\\rho$$ mapping with region-optimized virtual coils (ROVir)",
      authors: "Zhenfeng Lyu, Sha Hua, Peng Hu, Haikun Qi",
      journal: "ISMRM, 2024",
      year: 2024,
      month:5,
      type: "abstract",
      image: "/images/publication/7.jpg",
      abstract: "**Keywords:** Myocardium, Cardiomyopathy, Quantitative Imaging\n**Motivation:** Cardiac parametric mapping with electrocardiogram-triggered single-shot acquisition has compromised spatial resolution due to limited quiescent period for data acquisition.\n**Goal(s):** To develop a high-resolution simultaneous myocardial T1, T2 and T1$$\\rho$$ mapping technique.\n**Approach:** Enhance the spatial resolution while reducing the FOV to make the acquisition window fit in the mid-diastolic quiescent period in the cardiac cycle. Subsequently, employ the ROVir technique to eliminate fold-over artifacts arising from FOV reduction.\n**Results:** The proposed technique achieved high-resolution multi-parametric mapping without a loss of quantitative precision.\n**Impact:** A novel framework was proposed to shorten the acquisition window and improve the spatial resolution of electrocardiogram-triggered cardiac parametric mapping beyond common k-space undersamping. High-resolution myocardial parametric mapping can provide more precise and reliable diagnostic information.",
      links: [
        { label: "PDF", url: "/publications/paper7.pdf" },
        { label: "LINK", url: "https://archive.ismrm.org/2024/0582.html" }
      ]
    },
    {
      id: 8,
      title: "3D B1+ corrected simultaneous myocardial T1 and T1$$\\rho$$ mapping with subject-specific respiratory motion correction and water-fat separation",
      authors: "Haikun Qi, Zhenfeng Lv, Jiameng Diao, Xiaofeng Tao, Junpu Hu, Jian Xu, René Botnar, Claudia Prieto, Peng Hu",
      journal: "Magnetic Resonance in Medicine",
      year: 2024,
      month:10,
      type: "journal",
      image: "/images/publication/8.jpg",
      abstract: "**Purpose** \n To develop a 3D free-breathing cardiac multi-parametric mapping framework that is robust to confounders of respiratory motion, fat, and B1+ inhomogeneities and validate it for joint myocardial T1 and T1$$\\rho$$ mapping at 3T.\n\n**Methods**\n An electrocardiogram-triggered sequence with dual-echo Dixon readout was developed, where nine cardiac cycles were repeatedly acquired with inversion recovery and T1$$\\rho$$ preparation pulses for T1 and T1$$\\rho$$ sensitization. A subject-specific respiratory motion model relating the 1D diaphragmatic navigator to the respiration-induced 3D translational motion of the heart was constructed followed by respiratory motion binning and intra-bin 3D translational and inter-bin non-rigid motion correction. Spin history B1+ inhomogeneities were corrected with optimized dual flip angle strategy. After water-fat separation, the water images were matched to the simulated dictionary for T1 and T1$$\\rho$$ quantification. Phantoms and 10 heathy subjects were imaged to validate the proposed technique.\n\n**Results**\n The proposed technique achieved strong correlation (T1:$$R^{2}=0.99$$; T1$$\\rho$$: $$R^{2}=0.98$$) with the reference measurements in phantoms. 3D cardiac T1 and T1$$\\rho$$ maps with spatial resolution of $$2\\times2\\times4$$mm were obtained with scan time of $$5.4\\pm0.5$$min, demonstrating comparable T1 ($$1236\\pm59$$ms) and T1$$\\rho$$ ($$50.2\\pm2.4$$ms) measurements to 2D separate breath-hold mapping techniques. The estimated B1+ maps showed spatial variations across the left ventricle with the septal and inferior regions being 10%–25% lower than the anterior and septal regions.\n**Conclusion**\n The proposed technique achieved efficient 3D joint myocardial T1 and T1$$\\rho$$ mapping at 3T with respiratory motion correction, spin history B1+ correction and water-fat separation.",
      links: [
        { label: "PDF", url: "/publications/paper8.pdf" },
        { label: "LINK", url: "https://doi.org/10.1002/mrm.30317" }
      ]
    },
    {
      id: 9,
      title: "Assessment of Cardiomyopathy at Different CKD Stages using Free-breathing Simultaneous Myocardial T1, T2 and T1$$\\rho$$ Mapping: Initial Experience",
      authors: "Zhenfeng Lyu, Sha Hua, Yiwen Gong, Peng Hu, Haikun Qi",
      journal: "ISMRM, 2024",
      year: 2024,
      month:5,
      type: "abstract",
      image: "/images/publication/9.jpg",
      abstract:"**Keywords:** Myocardium, Cardiovascular, Quantitative Imaging\n**Motivation:** Chronic kidney disease (CKD) leads to significantly increased risk of cardiovascular death, highlighting the need for a non-contrast and non-invasive method to detect potential cardiomyopathy.\n**Goal(s):** To evaluate the performance of cardiac multi-parametric mapping in assessing cardiomyopathy in CKD patients.\n**Approach:** A recently proposed free-breathing multi-parametric mapping (FB-MultiMap) technique was employed to obtain myocardial T1, T2 and T1$$\\rho$$ maps of CKD patients. The parametric values were compared between healthy controls, stage 2, and stage 3-5 CKD patients.\n**Results:** Myocardial T1, T2 and T1$$\\rho$$ exhibit significant differences between early-stage and moderate-to-end-stage CKD patients, indicating their potential for assessing the progression of cardiomyopathy in CKD.\n**Impact:** FB-MultiMap may serve as an effective and easy-to-use tool for early diagnosis and monitoring of cardiomyopathy in CKD, potentially improving the outcome of CKD patients.",
      links: [
        { label: "PDF", url: "/publications/paper9.pdf" },
        { label: "LINK", url: "https://archive.ismrm.org/2024/1391.html" }
      ]
    },
    {
      id: 10,
      title: "Joint group-wise motion estimation and segmentation of cardiac cine MR images using recurrent U-Net",
      authors: "Pengfang Qian, Junwei Yang, Pietro Lió, Peng Hu, Haikun Qi",
      journal: "Medical Image Understanding and Analysis",
      year: 2022,
      month:5,
      type: "conference",
      image: "/images/publication/10.jpg",
      abstract:"Cardiac segmentation and motion estimation are two important tasks for the assessment of cardiac structure and function. Studies have demonstrated deep learning segmentation methods considering the valuable dynamics of the heart have more robust and accurate segmentations than those treating each frame independently. The former methods require annotations of all frames for supervised training, while only end-systolic (ES) and end-diastolic (ED) frames are commonly labeled. The issue has been addressed by integrating motion estimation into the segmentation framework and generating annotations for unlabeled frames with the estimated motion. However, the current pair-wise registration method with the ED frame as the template image may result in inaccurate motion estimation for systolic frames. We therefore, propose to use a group-wise registration network where the template image is learned implicitly for optimal registration performance, with the assumption that more accurate motion estimation leads to improved segmentation performance. Specifically, a recurrent U-Net based network is employed for joint optimization of group-wise registration and segmentation of the left ventricle and myocardium, where the dynamic information is utilized for both tasks with the recurrent units. In addition, an enhancement mask covering the heart is generated with the segmentation masks, which is expected to improve the registration performance by focusing the motion estimation on the heart. Experimental results in a cardiac cine MRI dataset including normal subjects and patients show that the group-wise registration significantly outperforms the pair-wise registration which translates to more accurate segmentations. The effectiveness of the proposed enhancement mask is also demonstrated in an ablation study.",
      links: [
        { label: "PDF", url: "/publications/paper10.pdf" },
        { label: "LINK", url: "https://link.springer.com/chapter/10.1007/978-3-031-12053-4_5" }
      ]
    },
    {
      id: 11,
      title: "Free-breathing simultaneous myocardial T2 and T1$$\\rho$$ mapping for non-contrast assessment of uremic cardiomyopathy",
      authors: "Qinfang Miao, Zhenfeng Lv, Sha Hua, Zhongqi Zhang, Jian Xu, Peng Hu, Haikun Qi",
      journal: "ISMRM, 2023",
      year: 2023,
      month:6,
      type: "abstract",
      image: "/images/publication/11.jpg",
      abstract:"Uremic cardiomyopathy is the adverse cardiac remodeling that commonly occurs in patients with chronic kidney disease. Previous studies have indicated increased intramyocardial fluid and myocardial fibrosis in uremic patients, which makes native myocardial T2 and T1$$\\rho$$ mapping ideal imaging biomarkers to characterize these changes. Therefore, we propose a free-breathing simultaneous T2 and T1$$\\rho$$ mapping technique to provide co-registered T2 and T1$$\\rho$$ maps. The proposed technique was firstly evaluated in phantoms and ten healthy subjects, which achieved similar performance to the conventional separate T2 and T1$$\\rho$$ mapping methods. The preliminary validation in four hemodialysis patients showed promising results.\n**Keywords:** Myocardium, Cardiomyopathy",
      links: [
        { label: "PDF", url: "/publications/paper11.pdf" },
        { label: "LINK", url: "https://archive.ismrm.org/2023/1433.html" }
      ]
    },
    {
      id: 12,
      title: "Unified deep learning for simultaneous cardiac cine MRI reconstruction, motion estimation and segmentation",
      authors: "Pengfang Qian, Zijian Zhou, Peng Hu, Haikun Qi",
      journal: "2024 IEEE International Symposium on Biomedical Imaging (ISBI)",
      year: 2024,
      month:5,
      type: "conference",
      image: "/images/publication/12.jpg",
      abstract: "Deep learning methods have achieved great success in cardiac cine MRI reconstruction, motion estimation, and segmentation. However, most studies considered the three tasks separately. While benefits have been shown for dual-task learning, such as motion-compensated cine MRI reconstruction and motion-guided cine segmentation, a framework considering all three tasks to more effectively exploit inter-task dependency remains uninvestigated. To fill this gap, we propose a unified approach that adopts groupwise image registration to estimate motion between cine frames, which is leveraged to assist reconstruction and segmentation. In particular, motion-augmented images enhance the reconstruction task, and motion-generated annotations offer additional supervision for the segmentation task. The improved reconstruction and segmentation will in turn help to yield more accurate motion estimation. We embed the three tasks in an unrolled framework, enabling iterative coarse-to-fine refinement of predictions across all tasks. Experimental results on a cine MRI dataset show the superior performance of the proposed method compared with the single-task and dual-task baseline methods.",
      links: [
        { label: "PDF", url: "/publications/paper12.pdf" },
        { label: "LINK", url: "https://ieeexplore.ieee.org/document/10635390" }
      ]
    },
    {
      id: 13,
      title: "Predicting late gadolinium enhancement of acute myocardial infarction in contrast-free cardiac cine MRI using deep generative learning",
      authors: "Haikun Qi, Pengfang Qian, Langlang Tang, Binghua Chen, Dongaolei An, Lian-Ming Wu",
      journal: "Circulation: Cardiovascular Imaging",
      year: 2024,
      month: 10,
      type: "journal",
      image: "/images/publication/13.jpg",
      abstract:"**BACKGROUND:**\nLate gadolinium enhancement (LGE) cardiac magnetic resonance (CMR) is a standard technique for diagnosing myocardial infarction (MI), which, however, poses risks due to gadolinium contrast usage. Techniques enabling MI assessment based on contrast-free CMR are desirable to overcome the limitations associated with contrast enhancement.\n\n**METHODS:**\nWe introduce a novel deep generative learning method, termed cine-generated enhancement (CGE), which transforms standard contrast-free cine CMR into LGE-equivalent images for MI assessment. CGE features with multislice spatiotemporal feature extractor, enhancement contrast modulation, and sophisticated loss function. Data from 430 patients with acute MI from 3 centers were collected. After image quality control, 1525 pairs (289 patients) of center I were used for training, and 293 slices (52 patients) of the same center were reserved for internal testing. The 40 patients (401 slices) of the other 2 centers were used for external testing. The CGE robustness was further tested in 20 normal subjects in a public cine CMR data set. CGE images were compared with LGE for image quality assessment and MI quantification regarding scar size and transmurality.\n\n**RESULTS:**\nThe CGE method produced images of superior quality to LGE in both internal and external data sets. There was a significant (P<0.001) correlation between CGE and LGE measurements of scar size (Pearson correlation, 0.79/0.80; intraclass correlation coefficient, 0.79/0.77) and transmurality (Pearson correlation, 0.76/0.64; intraclass correlation coefficient, 0.76/0.63) in internal/external data set. Considering all data sets, CGE demonstrated high sensitivity (91.27%) and specificity (95.83%) in detecting scars. Realistic enhancement images were obtained for the normal subjects in the public data set without false positive subjects.\n\n**CONCLUSIONS:**\nCGE achieved superior image quality to LGE and accurate scar delineation in patients with acute MI of both internal and external data sets. CGE can significantly simplify the CMR examination, reducing scan times and risks associated with gadolinium-based contrasts, which are crucial for acute patients.",
      links: [
        { label: "PDF", url: "/publications/paper13.pdf" },
        { label: "LINK", url: "https://doi.org/10.1161/CIRCIMAGING.124.016786" }
      ]
    },
    {
      id: 14,
      title: "Optimization of spin-lock preparation pulses for B1 and B0 insensitive cardiac T1$$\\rho$$ mapping",
      authors: "Haikun Qi, Zhenfeng Lv, Jian Xu, Peng Hu",
      journal: "ISMRM, 2023",
      year: 2023,
      month:6,
      type: "abstract",
      image: "/images/publication/14.jpg",
      abstract: "Cardiac T1$$\\rho$$ mapping is a promising technique for assessment of myocardial fibrosis without exogenous contrast agent. However, its wide application is hindered by the sensitivity of T1$$\\rho$$ preparation to B1 and B0 inhomogeneities. In this study, the state-of-the-art constant spin-lock methods including the composite and adiabatic excitation continuous-wave spin-lock methods were investigated using numerical simulations to assess their robustness to field inhomogeneities, and validated in phantoms and a preliminary subject. Two T1$$\\rho$$ preparation modules were found to generate superior T1$$\\rho$$ mapping quality in the presences of B0 and B1 inhomogeneities, indicating the potential of clinical application of cardiac T1$$\\rho$$ MRI.\n**Keywords**: Myocardium, Tissue Characterization",
      links: [
        { label: "PDF", url: "/publications/paper14.pdf" },
        { label: "LINK", url: "https://archive.ismrm.org/2023/4003.html" }
      ]
    },
    {
      id: 15,
      title: "Free-breathing simultaneous native myocardial T1, T2 and T1$$\\rho$$ mapping with Cartesian acquisition and dictionary matching",
      authors: "Zhenfeng Lyu, Sha Hua, Jian Xu, Yiwen Shen, Rui Guo, Peng Hu, Haikun Qi",
      journal: "Journal of Cardiovascular Magnetic Resonance",
      year: 2023,
      month:2,
      type: "journal",
      image: "/images/publication/15.jpg",
      abstract:"**Background**\nT1, T2 and T1$$\\rho$$ are well-recognized parameters for quantitative cardiac MRI. Simultaneous estimation of these parameters allows for comprehensive myocardial tissue characterization, such as myocardial fibrosis and edema. However, conventional techniques either quantify the parameters individually with separate breath-hold acquisitions, which may result in unregistered parameter maps, or estimate multiple parameters in a prolonged breath-hold acquisition, which may be intolerable to patients. We propose a free-breathing multi-parametric mapping (FB-MultiMap) technique that provides co-registered myocardial T1, T2 and T1$$\\rho$$ maps in a single efficient acquisition.\n**Methods**\nThe proposed FB-MultiMap performs electrocardiogram-triggered single-shot Cartesian acquisition over 16 consecutive cardiac cycles, where inversion, T2 and T1$$\\rho$$ preparations are introduced for varying contrasts. A diaphragmatic navigator was used for prospective through-plane motion correction and the in-plane motion was corrected retrospectively with a group-wise image registration method. Quantitative mapping was conducted through dictionary matching of the motion corrected images, where the subject-specific dictionary was created using Bloch simulations for a range of T1, T2 and T1$$\\rho$$ values, as well as B1 factors to account for B1 inhomogeneities. The FB-MultiMap was optimized and validated in numerical simulations, phantom experiments, and in vivo imaging of 15 healthy subjects and six patients with suspected cardiac diseases.\n**Results**\nThe phantom T1, T2 and T1$$\\rho$$ values estimated with FB-MultiMap agreed well with reference measurements with no dependency on heart rate. In healthy subjects, FB-MultiMap T1 was higher than MOLLI T1 mapping (1218$$\\pm$$50ms vs. 1166$$\\pm$$38ms, p<0.001). The myocardial T2 and T1$$\\rho$$ estimated with FB-MultiMap were lower compared to the mapping with T2- or T1$$\\rho$$-prepared 2D balanced steady-state free precession (T2: 41.2$$\\pm$$2.8ms vs. 42.5$$\\pm$$3.1ms, p=0.06; T1$$\\rho$$: 45.3$$\\pm$$4.4ms vs. 50.2$$\\pm$$4.0, p<0.001). The pathological changes in myocardial parameters measured with FB-MultiMap were consistent with conventional techniques in all patients.\n**Conclusion**\nThe proposed free-breathing multi-parametric mapping technique provides co-registered myocardial T1, T2 and T1$$\\rho$$ maps in 16 heartbeats, achieving similar mapping quality to conventional breath-hold mapping methods.",
      links: [
        { label: "PDF", url: "/publications/paper15.pdf" },
        { label: "LINK", url: "https://doi.org/10.1186/s12968-023-00973-6" }
      ]
    },
    {
        id: 16,
        title: "A survey of emerging applications of diffusion probabilistic models in MRI",
        authors: "Yuheng Fan, Hanxi Liao, Shiqi Huang, Yimin Luo, Huazhu Fu, Haikun Qi",
        journal: "Meta-Radiology",
        year: 2024,
        month: 6,
        type: "journal",
        image: "/images/publication/16.jpg",
        abstract:"Diffusion probabilistic models (DPMs) which employ explicit likelihood characterization and a gradual sampling process to synthesize data, have gained increasing research interest. Despite their huge computational burdens due to the large number of steps involved during sampling, DPMs are widely appreciated in various medical imaging tasks for their high-quality and diversity of generation. Magnetic resonance imaging (MRI) is an important medical imaging modality with excellent soft tissue contrast and superb spatial resolution, which possesses unique opportunities for DPMs. Although there is a recent surge of studies exploring DPMs in MRI, a survey paper of DPMs specifically designed for MRI applications is still lacking. This review article aims to help researchers in the MRI community to grasp the advances of DPMs in different applications. We first introduce the theory of two dominant kinds of DPMs, categorized according to whether the diffusion time step is discrete or continuous, and then provide a comprehensive review of emerging DPMs in MRI, including reconstruction, image generation, image translation, segmentation, anomaly detection, and further research topics. Finally, we discuss the general limitations as well as limitations specific to the MRI tasks of DPMs and point out potential areas that are worth further exploration.",
        links: [
          { label: "PDF", url: "/publications/paper16.pdf" },
          { label: "LINK", url: "https://doi.org/10.1016/j.metrad.2024.100082" }
        ]
    },
    {
      id: 17,
      title: "Accelerated 3D free‐breathing high‐resolution myocardial T1$$\\rho$$ mapping at 3 Tesla",
      authors: "Haikun Qi, Zhenfeng Lv, Junpu Hu, Jian Xu, René Botnar, Claudia Prieto, Peng Hu",
      journal: "Magnetic Resonance in Medicine",
      year: 2022,
      month: 8,
      type: "journal",
      image: "/images/publication/17.jpg",
      abstract:"**Purpose**\nTo develop a fast free-breathing whole-heart high-resolution myocardial T1$$\\rho$$ mapping technique with robust spin-lock preparation that can be performed at 3 Tesla.\n**Methods**\nAn adiabatically excited continuous-wave spin-lock module, insensitive to field inhomogeneities, was implemented with an electrocardiogram-triggered low-flip angle spoiled gradient echo sequence with variable-density 3D Cartesian undersampling at a 3 Tesla whole-body scanner. A saturation pulse was performed at the beginning of each cardiac cycle to null the magnetization before T1$$\\rho$$ preparation. Multiple T1$$\\rho$$-weighted images were acquired with T1$$\\rho$$ preparations with different spin-lock times in an interleaved fashion. Respiratory self-gating approach was adopted along with localized autofocus to enable 3D translational motion correction of the data acquired in each heartbeat. After motion correction, multi-contrast locally low-rank reconstruction was performed to reduce undersampling artifacts. The accuracy and feasibility of the 3D T1$$\\rho$$ mapping technique was investigated in phantoms and in vivo in 10 healthy subjects compared with the 2D T1$$\\rho$$ mapping.\n**Results**\nThe 3D T1$$\\rho$$ mapping technique provided similar phantom T1$$\\rho$$ measurements in the range of 25-120ms to the 2D T1$$\\rho$$ mapping reference over a wide range of simulated heart rates. With the robust adiabatically excited continuous-wave spin-lock preparation, good quality 2D and 3D in vivo T1$$\\rho$$-weighted images and T1$$\\rho$$ maps were obtained. Myocardial T1$$\\rho$$ values with the 3D T1$$\\rho$$ mapping were slightly longer than 2D breath-hold measurements (septal T1$$\\rho$$: 52.7$$\\pm$$1.4 ms vs. 50.2$$\\pm$$1.8 ms, P<0.01).\n**Conclusion**\nA fast 3D free-breathing whole-heart T1$$\\rho$$ mapping technique was proposed for T1$$\\rho$$ quantification at 3 T with isotropic spatial resolution (2mm$$^{3}$$) and short scan time of ~4.5 min.",
      links: [
        { label: "PDF", url: "/publications/paper17.pdf" },
        { label: "LINK", url: "https://doi.org/10.1002/mrm.29417" }
      ]
    },
    {
      id: 18,
      title: "SRMapping: A Super-Resolution Network with Multi-Level Fine-Grained Feature Fusion for Cardiac MR T1 Mappin",
      authors: "Chun Liu, Hanxi Liao, Zhenfeng Lv, Yimin Luo, Haikun Qi",
      journal: "SPIE Medical Imaging, 2025",
      year: 2025,
      month: 2,
      type: "conference",
      image: "/images/publication/18.jpg",
      abstract:"Cardiac magnetic resonance (CMR) T1 mapping is able to characterize myocardial tissue noninvasively. The quantitative T1 map is typically obtained by pixel-wise fitting of a series of T1-weighted images acquired at diastole of different cardiac cycles according to the T1 relaxation equation. Although clinically useful, CMR T1 mapping faces two pivotal challenges: the acquisition window in each cardiac cycle is typically long which makes CMR T1 mapping subject to cardiac motion blurring, while reducing the acquisition window leads to compromised spatial resolution; traditional fitting methods are time-consuming and sensitive to noise. To address these challenges, we propose a network for simultaneous super-resolution and quantification of low-resolution CMR T1 acquisition. It leverages a transformer-based encoder-decoder for comprehensive extraction of spatial and multi-contrast information to recover fine details from low-resolution T1 image series. The images with enhanced spatial resolution then go through a fitting network for efficient and noise-resilient quantitative T1 mapping. Furthermore, to improve the super-resolution quality, we propose a multi-scale feature fusion module which can fuse fine structural features of the heart extracted from other CMR acquisitions such as cine CMR into the above-mentioned super-resolution network. Extensive experiments have been performed to demonstrate the effectiveness of the proposed network design.",
      links: [
        { label: "PDF", url: "/publications/paper18.pdf" },
        // { label: "LINK", url: "https://doi.org/10.1002/mrm.29417" }
      ]
    },
    {
      id: 19,
      title: "Predicting Late Gadolinium Enhancement of Acute Myocardial Infarction in Contrast-free Cardiac Cine MRI using Deep Generative Learning",
      authors: "Pengfang Qian, Junwei Yang, Zijian Zhou, Peng Hu, Haikun Qi",
      journal: "ISMRM, 2024",
      year: 2024,
      type: "abstract",
      image: "/images/publication/19.jpg",
      abstract:"**Keywords:** Myocardium, Machine Learning/Artificial Intelligence\n**Motivation:** Although late Gadolinium Enhancement (LGE) imaging is widely used for diagnosing myocardial infarction (MI), contrast-free approaches are in need for patients with gadolinium contraindications.\n**Goal(s):** To develop Cine Generated Enhancement (CGE), a novel technique that uses contrast-free cine images to predict images resembling LGE.\n**Approach:** A deep generative model was trained to translate cine images into LGE images of acute MI exploiting the different motion dynamics between heathy and infarcted myocardium.\n**Results:** Realistic enhancement images can be generated for acute MI patients using cine images unseen during training. The scar size and transmurality estimated with CGE agreed well with LGE.\n**Impact:** This study presents an effective, non-invasive, and contrast-free method for predicting LGE in acute MI, potentially reducing the use of gadolinium-based contrast agents and shortening cardiac MR examinations.",
      links: [
        { label: "PDF", url: "/publications/paper19.pdf" },
        { label: "LINK", url: "https://archive.ismrm.org/2024/1500.html" }
      ]
    },
  ];

  export default Publications;