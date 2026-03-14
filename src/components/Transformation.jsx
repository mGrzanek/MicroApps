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
                <div className="hidden md:flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full text-light bg-main transition-colors duration-300   
                    flex items-center justify-center font-bold shadow-lg">
                        →
                    </div>
                </div>
               <TransformationCard {...afterData} />
                </div>
            </div>
        </section>
    );
}

export default Transformation;