import Product from "@/components/product";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  Clock,
  Download,
  Form,
  MousePointer2,
  MousePointerClick,
  Smartphone,
  Smile,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import { products } from "@/lib/products";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mx-auto w-full max-w-7xl pt-12 md:pt-28 pb-24 px-4 ">
        <div className="flex flex-col items-center w-full gap-8 md:flex-row md:justify-between ">
          <div className="space-y-8 basis-2/3">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
              Belajar Lebih Mudah,{" "}
              <span className="text-my-prmary">Berkembang Lebih Hebat</span>
            </h1>
            <p className="lg:text-xl">
              Temukan berbagai ebook, worksheet, template, dan materi
              pembelajaran berkualitas yang dirancang untuk membantu anak,
              pelajar, mahasiswa, guru, hingga masyarakat umum belajar dengan
              cara yang praktis dan menyenangkan.
            </p>

            <Link href="#products">
              <Button
                size="lg"
                variant="ghost"
                className="py-6 animate-bounce bg-my-prmary hover:bg-my-prmary/80 w-full text-white hover:text-white px-4 md:w-1/2"
              >
                Ambil Promo Sekarang
                <MousePointerClick />
              </Button>
            </Link>
          </div>

          <div className="container p-4 bg-white border basis-2/4 rounded-2xl shadow aspect-square grow">
            <Image
              src="/product.png"
              alt="hero"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            ></Image>
          </div>
        </div>
      </section>

      {/* Keunggulan */}
      <section className="container mx-auto w-full max-w-7xl rounded-3xl px-4 pb-24">
        <div className="bg-white/90 px-8 py-16 rounded-3xl shadow-2xl">
          <h2 className="font-bold text-xl text-center bg-my-secondary p-4 rounded-3xl border-2 w-fit mx-auto">
            Apa yang kamu dapatkan?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-8">
            <Card className="group hover:bg-my-secondary">
              <CardHeader>
                <CardTitle>
                  <BookOpen className="size-16 p-4 bg-my-secondary text-black rounded-3xl group-hover:bg-my-prmary/70 group-hover:text-white" />
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-black mt-2">
                  Materi Berkualitas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Setiap produk disusun secara sistematis agar mudah dipahami
                  oleh berbagai kalangan.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:bg-my-secondary">
              <CardHeader>
                <CardTitle>
                  <Smartphone className="size-16 p-4 bg-my-secondary text-black rounded-3xl group-hover:bg-my-prmary/70 group-hover:text-white" />
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-black mt-2">
                  Mudah Diakses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Semua produk tersedia dalam format digital sehingga dapat
                  diakses melalui laptop, tablet, maupun smartphone.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:bg-my-secondary">
              <CardHeader>
                <CardTitle>
                  <Clock className="size-16 p-4 bg-my-secondary text-black rounded-3xl group-hover:bg-my-prmary/70 group-hover:text-white" />
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-black mt-2">
                  Praktis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Setelah pembayaran berhasil, produk dapat langsung diunduh dan
                  digunakan tanpa perlu menunggu proses pengiriman fisik.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:bg-my-secondary">
              <CardHeader>
                <CardTitle>
                  <Smile className="size-16 p-4 bg-my-secondary text-black rounded-3xl group-hover:bg-my-prmary/70 group-hover:text-white" />
                </CardTitle>
                <CardDescription className="text-2xl font-bold text-black mt-2">
                  Mudah Dipahami
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Materi disajikan menggunakan bahasa yang jelas, terstruktur,
                  dan ramah bagi pemula, sehingga siapa pun dapat mengikuti
                  pembelajaran dengan nyaman.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product */}
      <section
        id="products"
        className="container mx-auto w-full max-w-7xl rounded-3xl px-4 pb-24"
      >
        <h3 className="font-bold text-3xl text-my-prmary text-center p-4 rounded-3xl w-fit mx-auto">
          Daftar Produk
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* How to get product */}
      <section className="container mx-auto w-full max-w-7xl rounded-3xl px-4 pb-24">
        <h3 className="font-bold text-3xl text-my-prmary text-center p-4 rounded-3xl w-fit mx-auto">
          Cara Mendapatkan Produk
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2 mt-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-3xl font-bold py-4 px-8 rounded-full border-2 text-white border-white bg-my-prmary w-fit">
              1
            </p>
            <Card className="text-center w-56 h-56">
              <CardHeader>
                <CardTitle>
                  <MousePointer2 className="size-8 inline-block" />
                </CardTitle>
                <CardDescription className="text-black mt-2 text-xl font-bold ">
                  Pilih Produk
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Temukan produk yang sesuai dengan kebutuhan belajar Anda.</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-3xl font-bold py-4 px-8 rounded-full border-2 text-white border-white bg-my-prmary w-fit">
              2
            </p>
            <Card className="text-center w-56 h-56">
              <CardHeader>
                <CardTitle>
                  <Form className="size-8 inline-block" />
                </CardTitle>
                <CardDescription className="text-black mt-2 text-xl font-bold ">
                  Isi Form Pembelian
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Lengkapi Nama, Email dan Nomor Whatsapp</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-3xl font-bold py-4 px-8 rounded-full border-2 text-white border-white bg-my-prmary w-fit">
              3
            </p>
            <Card className="text-center w-56 h-56">
              <CardHeader>
                <CardTitle>
                  <Wallet className="size-8 inline-block" />
                </CardTitle>
                <CardDescription className="text-black mt-2 text-xl font-bold ">
                  Pilih Pembayaran
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <p>Pilih mentode pembayaran yang Anda inginkan</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-3xl font-bold py-4 px-8 rounded-full border-2 text-white border-white bg-my-prmary w-fit">
              4
            </p>
            <Card className="text-center  w-56 h-56">
              <CardHeader>
                <CardTitle>
                  <Wallet className="size-8 inline-block" />
                </CardTitle>
                <CardDescription className="text-black mt-2 text-xl font-bold ">
                  Centang S&K
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <p>Centang kotak Terms of Use</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-3xl font-bold py-4 px-8 rounded-full border-2 text-white border-white bg-my-prmary w-fit">
              5
            </p>
            <Card className="text-center  w-56 h-56">
              <CardHeader>
                <CardTitle>
                  <Download className="size-8 inline-block" />
                </CardTitle>
                <CardDescription className="text-black mt-2 text-xl font-bold ">
                  Akses File
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <p>File akan dikirimkan dalam bentuk link Google Drive</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
