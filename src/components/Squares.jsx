import { squares } from "../common/microapps-data";

const Squares = () => {
    return(
        <div className="absolute inset-0 pointer-events-none">
            {squares.map((s, i) => (
            <div key={i} className={`absolute ${s} backdrop-blur-sm square-float`} style={{ animationDelay: `${i * 0.8}s` }} />
            ))}
      </div>
    );
}

export default Squares;