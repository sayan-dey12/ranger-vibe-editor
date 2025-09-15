// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo / Name */}
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#3B82F6]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            MyProject
          </span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-[#3B82F6] transition"
          >
            About
          </a>
          
          <a
            href="#"
            className="text-gray-600 dark:text-gray-400 hover:text-[#3B82F6] transition"
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} MyProject. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
