import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#0B1C39] text-gray-300 px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/AcufiLogoFooter.png"
              alt="AcuFi Logo"
              width={150}
              height={54}
              className="object-contain"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" className="underline">
                  Acufi For Banking
                </Link>
              </li>
              <li>
                <Link href="#" className="underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="underline">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="#" className="underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="#" className="underline">
                  Acufi Consumer Reporting Agency
                </Link>
              </li>
              <li>
                <Link href="#" className="underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <h3 className="font-semibold mb-2">Newsletter Sign up</h3>
            <p className="text-sm mb-2">
              Stay Updated on the Future of Neo Banking
            </p>
            <Link href="#" className="hover:underline text-sm">
              CTA — Subscribe Now!
            </Link>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact Information</h3>
            <p className="text-sm">Email: sales@acufi.com</p>
            <p className="text-sm">Phone: +1-866-711-4350</p>
            <p className="text-sm">Address: 4864 Sparks Blvd, Nevada, 89436</p>

            <h3 className="font-semibold mt-6 mb-2">Follow us</h3>
            <div className="flex">
              <Link href="#">
                <Image
                  src="/Linkedin.png"
                  alt="Linkedin"
                  width={66}
                  height={66}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/Twitter.png"
                  alt="Twitter"
                  width={66}
                  height={66}
                />
              </Link>
              <Image src="/youtube.png" alt="Youtube" width={66} height={66} />
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-sm text-[#0000]-400 bg-white py-3">
        © 2025 All Rights Reserved
      </div>
    </>
  );
}
