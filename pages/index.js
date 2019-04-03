import dynamic from "next/dynamic";

const AnimatingWithGSAP = dynamic(
  () => import("../components/animatingWithGSAP"),
  {
    ssr: false
  }
);

const Index = () => (
  <>
    <AnimatingWithGSAP />
  </>
);

export default Index;
