import heroSectionImage from "../assets/img/hero-section-banner.jpg";
import Button from "./Button";
const HeroSection = () => {
    return (
        <div className="relative bg-cover bg-center h-[720px]"
        style={{ backgroundImage: `url(${heroSectionImage})`}} >
            <div className="absolute bg-[#000000] opacity-45 h-full w-full"></div>
            <div className="absolute h-full w-full text-custom-content-color flex items-center justify-center flex-col">
                    <h1 className="text-[56px] font-bold">Find the Job that Fits your Lifestyle</h1>
                    <p className="text-xl mb-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam magna  est, <br/>pharetra accumsan convallis ac, finibus vitae elit. In interdum  porttitor mi.</p>
                    <Button label="Browse Jobs" textSize="text-[24px]"/>
                </div>
        </div>
    )
}

export default HeroSection;