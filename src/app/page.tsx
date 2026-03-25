import Layout from "../components/layout/Layout";
import Hero from "../components/ui/Hero";
import ProductPromo from "../components/ui/HomePageGrid";
import GlobalImage from '../components/common/GlobalImage';
export default function Home() {
  return (
    <Layout>
      {/* Hero Sections */}
        <section>
          <Hero
            title="ShanghaiTech CardioVision Lab"
            subtitle="Dedicated to Cardiac Imaging and Fast MRI."
            image="/images/homepage/animation222_mobile.gif"
            darkText={false}
            bgColor="#f1f3f9"
          />
        </section>

        <div className="container max-w-5xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Advancing Cardiac Imaging and MRI Speed
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-xl">
              Our group is currently working on developing next-generation cardiovascular MR techniques and pushing the speed limit of MR aiming for MR-guided treatment.
              </p>
              {/* <div className="border-l-4 border-gray-900 pl-4 italic text-gray-600">
                "Observing the heart's beat is one thing; understanding why it beats is quite another. Advancing cardiac imaging technologies are now bridging this formidable gap."
              </div> */}
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-72 w-full rounded-lg">
                <GlobalImage
                  src="/images/homepage/cmr_overview22.jpg"
                  alt="Cardiac MRI Overview"
                  fill
                  // objectFit="fill"
                />
              </div>
            </div>
          </div>
        </div>

      {/* Promo Grid Sections */}
        <div className="container max-w-5xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductPromo
              title="Next-Generation CMR"
              subtitle="High-resolution single-sequence multi-parametric cardiac MRI integrated with AI to optimize data acquisition, motion correction, image reconstruction, and cardiac disease diagnosis."
              primaryLink={{ text: "Learn more", url: "/research#next-gen-cmr" }}
              // secondaryLink={{ text: "", url: "" }}
              image="/images/homepage/nextgencmr.jpg"
              darkText={true}
              bgColor="#ffffff"
              isSmall={true}
            />

            <ProductPromo
              title="MR-Guided Treatment"
              subtitle="Real-time MR imaging with highly efficient sampling trajectory and advanced reconstruction techniques for guiding the treatment process."
              primaryLink={{ text: "Learn More", url: "/research#accelerating-mr" }}
              image="/images/homepage/motiontracking.gif"
              darkText={true}
              bgColor="#ffffff"
              isSmall={true}
            />
          </div>
        </div>
  
    </Layout>
  );
}