import SectionHeading from "./SectionHeading";
import TransformationCard from "./TransformationCard";
import { beforeData, afterData } from "../common/microapps-data";

const Transformation = () => {
    return(
        <section className="py-10 bg-light">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading>Transformacja</SectionHeading>
                <div className="grid md:grid-cols-[2fr_0.5fr_2fr] gap-8 items-center">
                <TransformationCard {...beforeData} />
                <div className="hidden md:flex items-center justify-center font-extrabold text-main text-8xl transition-transform duration-500 hover:translate-x-4">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-20 h-20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
                </div>
               <TransformationCard {...afterData} />
                </div>
            </div>
        </section>
    );
}

export default Transformation;