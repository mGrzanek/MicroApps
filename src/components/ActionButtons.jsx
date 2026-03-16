import Link from "next/link";

const ActionButtons = () => {
    return (
        <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link href="/kontakt" className="group flex items-center gap-2 bg-blue-400 px-4 py-3.5 rounded-md text-light font-semibold hover:bg-blue-600 hover:cursor-pointer transition-colors duration-500">
              Umów konsultację
              <svg
                className="h-5 w-5 transition group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </Link>
            <Link href="/oferta" className="border-2 border-gray-200/50 bg-main font-semibold px-4 py-3.5 rounded-md text-light hover:bg-blue-900/90 hover:cursor-pointer transition-colors duration-500">
              Wybierz pakiet
            </Link>
        </div>
    );
}

export default ActionButtons;