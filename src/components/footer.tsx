import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-my-prmary ">
      <div className="py-12 p-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/belajarhebat.jpg"
              alt="logo"
              width={50}
              height={50}
              className="rounded-full "
            />
            <p className="text-white text-2xl font-bold">Belajar Hebat</p>
          </div>
          <p className="text-white ">
            Temukan berbagai produk digital edukasi yang membantu Anda
            meningkatkan keterampilan, pengetahuan, dan produktivitas.
          </p>
        </div>

        <div>
          <h3 className="text-white text-xl font-semibold">Halaman</h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="flex gap-2 text-white hover:ms-2">
                <ChevronRight />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-2 text-white hover:ms-2">
                <ChevronRight />
                Produk
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-2 text-white hover:ms-2">
                <ChevronRight />
                Cara Order
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-xl font-semibold">
            Hukum & Kebijakan
          </h3>
          <ul className="mt-2">
            <li>
              <a href="#" className="flex gap-2 text-white hover:ms-2">
                <ChevronRight />
                Syarat & Ketentuan
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-2 text-white hover:ms-2">
                <ChevronRight />
                Disclaimer
              </a>
            </li>
            <li>
              <a href="#" className="flex gap-2 text-white hover:ms-2">
                <ChevronRight />
                Kebijakan Privasi
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-xl font-semibold">Support</h3>
          <div className="mt-4 text-white">
            <Link href="#" className="flex gap-2 items-center hover:ms-2">
              <FaInstagram className="size-8" />
              Instagram
            </Link>
            <Link href="#" className="flex gap-2 items-center hover:ms-2">
              <FaFacebook className="size-8" />
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
