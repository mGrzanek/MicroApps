import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { steps } from "../common/microapps-data";

const DigitalMakeover = () => {

    return(
        <section className="py-10 bg-white">
            <div className="max-w-6xl mx-auto px-6">
            <SectionHeading>Co otrzymujesz? </SectionHeading>
                <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, i) => (
                    <div
                    key={i}
                    className="bg-white  place-items-center text-center p-6"
                    >    
                        <div className="relative w-35 h-25 mr-2">
                        <Image
                            src={`/images/${step.icon}.webp`}
                            fill
                            className="object-cover"
                            alt={step.icon}
                        />
                        </div>
                        <h3 className="text-lg font-semibold py-3 text-main">
                        {step.title}
                        </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {step.description}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
}

export default DigitalMakeover;