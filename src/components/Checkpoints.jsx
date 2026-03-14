const Checkpoints = ({arr, txtColor}) => {
    return(
        <ul className={`mt-6 max-w-sm grid grid-cols-2 gap-2 text-${txtColor}`}>
            {arr.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-grass text-sm">
                    ✓
                </span>
                <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}

export default Checkpoints;