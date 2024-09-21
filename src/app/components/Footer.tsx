import Link from "next/link";
// src/app/components/Footer.tsx
const Footer = () => {
  return (
    <section className="relative bg-gray-800 flex-grow">
      <div className="container px-6 py-12 mx-auto">
        <div className="flex flex-col items-center justify-between text-sm md:flex-row">
          <p className="mb-6 md:mb-0 text-center text-base text-gray-400">&copy; 2024 Your Company, Inc. All rights reserved.</p>
          <ul className="flex gap-4 text-gray-400">
            <li>
              <Link href="../pages/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
