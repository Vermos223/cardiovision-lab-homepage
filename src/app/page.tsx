import Layout from "../components/layout/Layout";
import Hero from "../components/ui/Hero";
import ProductPromo from "../components/ui/ProductPromo";
import Image from "next/image";
import GlobalImage from '../components/common/GlobalImage';
export default function Home() {
  return (
    <Layout>
      {/* Hero Sections */}
        <section>
          <Hero
            title="ShanghaiTech CardioVision Lab"
            subtitle="Pushing the Boundaries of  CMR."
            image="/images/homepage/cmr_home.jpg"
            darkText={false}
            bgColor="#f1f3f9"
            imageSize="full"
          />
        </section>

        <div className="container max-w-5xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
                Advancing Cardiac Imaging
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-xl">
              Our laboratory is dedicated to advancing imaging while expanding imaging.
              </p>
              <div className="border-l-4 border-gray-900 pl-4 italic text-gray-600">
                "Observing the heart's beat is one thing; understanding why it beats is quite another. Advancing cardiac imaging technologies are now bridging this formidable gap."
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-72 w-full">
                <GlobalImage
                  src="/images/homepage/cmr_overview.jpg"
                  alt="Cardiac MRI Overview"
                  layout="fill"
                  objectFit="fill"
                />
              </div>
            </div>
          </div>
        </div>

      {/* Promo Grid Sections - 调整与上部分布局一致 */}
        <div className="container max-w-5xl mx-auto px-6 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductPromo
              title="Next-Generation Cardiac MRI"
              subtitle="High-resolution single-sequence multi-parametric cardiac MRI integrated with AI to optimize data acquisition, motion correction, image reconstruction, and cardiac disease diagnosis."
              primaryLink={{ text: "Learn more", url: "/research#next-gen-cmr" }}
              // secondaryLink={{ text: "Buy", url: "/shop/buy-watch/fruit-watch-series-10" }}
              image="/images/homepage/nextgencmr.jpg"
              darkText={true}
              bgColor="#ffffff"
              // logoImage="/images/logo-apple-watch.png"
              isSmall={true}
            />

            <ProductPromo
              title="Accelerating MR for Treatment Guidance"
              subtitle="Real-time MR imaging with advanced acceleration techniques integrated with trajectory optimization for precise, adaptive guidance of cardiac interventions and therapeutic procedures."
              primaryLink={{ text: "Learn More", url: "/research#accelerating-mr" }}
              image="/images/homepage/realtime.jpg"
              darkText={true}
              bgColor="#ffffff"
              isSmall={true}
            />
          </div>
        </div>
  
    </Layout>
  );
}