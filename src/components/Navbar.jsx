import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-slate-600 mb-10 text-white">
      <div className="container mx-auto flex justify-between items-center py-3">
        <h3 className="font-bold text-3xl">NextCRUD</h3>

        <ul className="flex gap-x-2 text-lg font-bold">
          <li>
            <Link href="/" className="text-slate-300 hover:text-slate-200">
              Tasks
            </Link>
          </li>
          <li>
            <Link href="/new" className="text-slate-300 hover:text-slate-200">
              New
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-300 hover:text-slate-200">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
