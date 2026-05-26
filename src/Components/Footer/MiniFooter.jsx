function MiniFooter() {
  return (
    <footer className="bg-red-950 text-white py-4 mt-10">
      <div className="text-center text-sm">
        © {new Date().getFullYear()} Andhra Pickles
      </div>
    </footer>
  );
}

export default MiniFooter;