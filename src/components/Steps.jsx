import SectionHeading from "./SectionHeading";
import { stepsToSuccess } from "@/common/microapps-data";

const Steps = () => {
    return (
        <section className="py-10 bg-gray-200">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading>Krok po kroku</SectionHeading>
                <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0">

                {stepsToSuccess.map((step, index) => (
                    <div
                    key={index}
                    className="relative flex-1 bg-white shadow-md p-6 text-center clip-step"
                    >
                    <h3 className="font-semibold text-lg text-main mb-2">
                        {step.title}
                    </h3>
                    <p className="text-gray-600 font-medium px-2">
                        {step.description}
                    </p>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}

export default Steps;