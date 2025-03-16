import Layout from "../components/layout/Layout";
import Hero from "../components/ui/Hero";
import ProductPromo from "../components/ui/ProductPromo";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      {/* Hero Sections */}
      <section>
        <Hero
          title="ShanghaiTech CMR LAB"
          subtitle="Cardiovascular Sequcense. Deep Learning."
          primaryLink={{ text: "Learn more", url: "/macbook-air" }}
          secondaryLink={{ text: "Pre-order", url: "/shop/buy-mac/macbook-air" }}
          image="/images/hero-macbook-air.jpg"
          darkText={true}
          bgColor="#f1f3f9"
        />
      </section>

      <section>
        <Hero
          title="iPad Air"
          subtitle="Now supercharged by the M3 chip."
          primaryLink={{ text: "Learn more", url: "/ipad-air" }}
          secondaryLink={{ text: "Pre-order", url: "/shop/buy-ipad/ipad-air" }}
          image="/images/hero-ipad-air.jpg"
          darkText={true}
          bgColor="#f1f3f9"
        />
      </section>

      <section>
        <Hero
          title="iPhone"
          subtitle="Meet the iPhone 16 family."
          primaryLink={{ text: "Learn more", url: "/iphone" }}
          secondaryLink={{ text: "Shop iPhone", url: "/shop/buy-iphone" }}
          image="/images/hero-iphone-family.jpg"
          darkText={false}
          bgColor="#000000"
        />
      </section>

      {/* Promo Grid Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 px-3 pt-3">
        <ProductPromo
          title="Fruit Watch Series 10"
          subtitle="Thinnest classic."
          primaryLink={{ text: "Learn more", url: "/fruit-watch-series-10" }}
          secondaryLink={{ text: "Buy", url: "/shop/buy-watch/fruit-watch-series-10" }}
          image="/images/promo-watch.jpg"
          darkText={true}
          bgColor="#f5f5f7"
          logoImage="/images/logo-apple-watch.png"
          isSmall={true}
        />

        <ProductPromo
          title="Fruit Trade In"
          subtitle="Get $170-$630 in credit toward iPhone 16 or iPhone 16 Pro when you trade in iPhone 12 or higher."
          primaryLink={{ text: "Get your estimate", url: "/shop/trade-in" }}
          image="/images/promo-tradein.jpg"
          darkText={true}
          bgColor="#f5f5f7"
          isSmall={true}
        />

        <ProductPromo
          title="iPad"
          subtitle="Now with the speed of the A16 chip and double the starting storage."
          primaryLink={{ text: "Learn more", url: "/ipad-11" }}
          secondaryLink={{ text: "Pre-order", url: "/shop/buy-ipad/ipad" }}
          image="/images/promo-ipad.jpg"
          darkText={true}
          bgColor="#f5f5f7"
          isSmall={true}
        />

        <ProductPromo
          title="Mac Studio"
          subtitle="M4 Max and M3 Ultra. Choose your superpower."
          primaryLink={{ text: "Learn more", url: "/mac-studio" }}
          secondaryLink={{ text: "Pre-order", url: "/shop/buy-mac/mac-studio" }}
          image="/images/promo-mac-studio.jpg"
          darkText={true}
          bgColor="#f5f5f7"
          isSmall={true}
        />

        <ProductPromo
          title="AirPods Pro 2"
          subtitle="Now with a Hearing Aid feature."
          primaryLink={{ text: "Learn more", url: "/airpods-pro/hearing-health" }}
          secondaryLink={{ text: "Buy", url: "/shop/buy-airpods/airpods-pro-2" }}
          image="/images/promo-airpods.jpg"
          darkText={false}
          bgColor="#000000"
          isSmall={true}
        />

        <ProductPromo
          title="Fruit Card"
          subtitle="Get up to 3% Daily Cash back with every purchase."
          primaryLink={{ text: "Learn more", url: "/fruit-card" }}
          secondaryLink={{ text: "Apply now", url: "/apply-fruit-card" }}
          image="/images/promo-apple-card.jpg"
          darkText={true}
          bgColor="#f5f5f7"
          logoImage="/images/logo-apple-card.png"
          isSmall={true}
        />
      </section>
    </Layout>
  );
}
