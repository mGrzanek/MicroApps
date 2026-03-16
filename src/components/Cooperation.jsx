import SectionHeading from "./SectionHeading";
import Checkpoints from "./Checkpoints";
import ActionButtons from "./ActionButtons";
import { clients } from "../common/microapps-data";

const Cooperation = () => {
    return(
        <section className="py-10 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading>Dla kogo?</SectionHeading>
                <div className="place-items-center"><Checkpoints arr={clients} txtColor="main" /></div>
            </div>
             <div className="grid place-items-center px-4 py-5"><ActionButtons /></div>
        </section>
    );
}

export default Cooperation;