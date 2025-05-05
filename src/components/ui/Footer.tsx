export default function Footer() {
  return (
    <footer className="bg-black py-6 text-gray-300 w-full">
      <div className="max-w-4xl mx-auto px-4 text-center md:text-left">
        <div className="mb-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Swakarsa Digital Indonesia. All rights reserved.
          </p>
        </div>
        <div className="text-sm space-y-1">
          <p>Alamat: Jl. HRM Mangundiprojo No. 8, Kedamaian, Bandar Lampung</p>
          <p>Telepon: <a href="tel:+6282279513201" className="hover:underline">+62 82279513201</a></p>
          <p>Email: <a href="mailto:yonathan.tanu123@gmail.com" className="hover:underline">yonathan.tanu123@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
}
