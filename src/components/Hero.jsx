import Squares from "./Squares";
import Checkpoints from "./Checkpoints";
import ActionButtons from "./ActionButtons";
import { offer } from "../common/microapps-data";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#1a4a7a]" />
      <div
        className="
        hidden md:block
        absolute inset-0
        bg-[url('/images/hero.webp')]
        bg-no-repeat
        bg-right
        md:bg-[length:80%] lg:bg-[length:60%]
        "
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_55%,rgba(59,130,246,0.25)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_75%_50%,rgba(30,90,140,0.3)_0%,transparent_60%),linear-gradient(to_right,#0a1628_0%,#0a1628_30%,rgba(10,22,40,0.95)_40%,rgba(13,40,71,0.7)_50%,rgba(13,40,71,0.3)_60%,transparent_75%),linear-gradient(to_top,#0d2847_0%,rgba(13,40,71,0.9)_15%,rgba(13,40,71,0.3)_35%,transparent_50%),linear-gradient(to_bottom,rgba(10,22,40,0.9)_0%,rgba(10,22,40,0.5)_15%,transparent_35%)]" />
      <Squares />
      <div className="relative z-10 mx-auto max-w-7xl mt-2 px-6 lg:px-8 flex min-h-[70vh] items-center pt-10 pb-16">
        <div>
        <h2 className="text-light/70 font-semibold">MicroApps - Digital Makeover as a Service</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl py-5 max-w-5xl font-bold text-light leading-tight">
            Przyciągaj klientów, oszczędzaj czas i napędzaj swój biznes
          </h1>
          <div className=" md:max-w-sm lg:max-w-md xl:max-w-lg">
              <p className="py-1 text-light/90 text-lg">
                Projektujemy, budujemy i wdrażamy <strong>zautomatyzowane</strong> strony dla <strong>małych</strong> i <strong>średnich firm</strong> opierając się na najnowszych technologiach.
              </p>
              <p className="py-1 text-shadow-lg text-light/90 text-lg">
                <strong>Redesign</strong> i <strong>automatyzacje</strong> realizowane <strong>szybko</strong> i według <strong>potrzeb</strong> Twojego biznesu.
              </p>
          </div >
          <Checkpoints arr={offer} txtColor="light/90" />
          <ActionButtons />
        </div>
      </div>
    </section>
  )
}

export default Hero;