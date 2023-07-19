// React imports

// MUI imports

// Project imports
import Gradient from "./backgroundGradient";

// images imports
// always assume the images will be in ./assets/images
import productBeingUsedInRealLife from "./assets/images/productBeingUsedInRealLife.png";
import aspirationalAppImage from "./assets/images/aspirationalAppImage.png";

// FullBleedImage is a Dark component and shows an image that spans the entire width of the page
// Inputs:
// - imageAltTag: A descriptive image tag of the format: 4K photo shoot of product being used in ADD SCENARIO.
// - imageSrcWidth1600pxHeight900px: The image src following createReactApp style as per the template above.
import FullBleedImage from "./fullBleedImage";

// Headline is a Light component and shows a title and paragraph of descriptive text
// Inputs:
// - headline: The headline text.
// - subText: A paragraph of descriptive text related to the headline.
import Headline from "./headline";

// The following are standard system imports and do not need to be changed as they are used by all landing pages
import TrailingSignup from "./trailingSignup";
import Footer from "./footer";

// HeroApp is a Hero component that goes at the top of the page. It shows a visual image, a headline and a signup box
// Inputs:
// - mainHeading_3to5Words: 1-4 words
// - subHeading_15to20Words: 10-15 words that act as a product tagline.
// - keyFeature1_5to15Words: 10-15 words on the first key feature of the product to highlight
// - keyFeature2_5to15Words: 10-15 words on the second key feature of the product to highlight
// - keyFeature3_5to15Words: 10-15 words on the third key feature of the product to highlight
// - screenMockUpSrc: The src of an image with width 290px and height: 624px. This will be shown embedded in the iphone mockup.
// - imageAltTag: Image alt for the image, should be a variantion of "4K photo shoot hero image of product being used in real life"
import HeroApp from "./heroApp";

// Any custom components should be imported here
// import Custom from "./customComponent";

// the hardcoded expectation is that the text json file will be here.
// all components are passed this object so that they have access to the text content of the site
import text from "assets/text/text.json";

// this page is a container for landing page components which will be merged in.
// the layout rules are as follows:
// - The page must start with a component of type Origin.React.LandingPage.HeroWithSignUpBox
// - The next component must be of type Origin.React.LandingPage.LightComponents.*
// - The next component must be of type Origin.React.LandingPage.DarkComponents.*
// - This pattern should continue as required until the bottom of the page
// - The page should finish with an Origin.React.LandingPage.Footer component
// - Custom components count as light components and so should appear in the flow after a dark component
// the content rules are as follows:
// - All text is generated later and contained in the text.json file
// - You must use descriptive text placeholders (e.g. text.Key_Benefit_1_Headline_Text_Ten_Words) to show which content is required and include the target length of the content
// - Image alt tags should generally include the words 4K photo shoot

export default function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Gradient />

      {/* An Example layout is shown below. This should be changed */}

      {/* Choice of heroApp, heroRealProduct or heroSaas goes here dependent on what type of product it is */}
      <HeroApp
        mainHeading_3to5Words="Experience Insect Cuisine"
        subHeading_15to20Words="London's first ever restaurant that serves only insects"
        keyFeature1_5to15Words="Eat bug, wasps and worms."
        keyFeature2_5to15Words="Suprise your friends with your culinary superiority"
        keyFeature3_5to15Words="Reap new health benefits and save the planet"
        screenMockUpSrcWidth290pxHeight624px={aspirationalAppImage}
        imageAltTag="4K photo shoot hero image of product being used in real life (never a logo!)"
      />
      {/* End Hero */}

      {/* First light section goes here */}
      <Headline
        headline={text.Key_Benefit_1_Headline_Text}
        subText={text.Key_Benefit_1_Detailed_Paragraph}
      />
      {/* End First light section */}
      {/* First Dark section goes here */}
      <FullBleedImage
        imageSrcWidth1600pxHeight900px={productBeingUsedInRealLife}
        imageAltTag="4K photo shoot of product being used in real life"
      />
      {/* End first Dark section */}
      {/* Dark and light sections continue here as required */}
      <Headline
        headline={text.Key_Benefit_2_Headline_Text}
        subText={text.Key_Benefit_2_Detailed_Paragraph}
      />
      {/* End Additional Sections */}

      <TrailingSignup />
      <Footer />

      {/* End Example Layout */}
    </div>
  );
}
