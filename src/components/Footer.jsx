export default function Footer() {
  return (
    <footer className="py-8 px-6 text-center">
      <p className="text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Xinyu Zheng. Built with React &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
