// package
import Link from "next/link";

// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Text from "@/ui/text";
import Heading from "@/ui/head"
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/ui/assets/svg";

const Footer = () => {
  return (
    
    <SectionLayout bg="bg-[#141718]">
      <div className="space-y-10 px-8 py-12 lg:space-y-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
            <h3 className="font-poppins text-2xl font-medium text-white lg:border-r lg:border-[#6C7275] lg:pr-8">
              Tu Tienda en Linea<span className="text-[#6C7275]">.</span>
            </h3>
            <span className="h-[1px] w-8 rounded-full bg-[#6C7275] lg:hidden"></span>
            <Text size="sm" color="white/900" className="lg:pl-8">
              Tienda de computo
            </Text>
          </div>

          <ul className="flex flex-col gap-8 lg:flex-row lg:gap-10">
            <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]">
              <Link href="/">Menu</Link>
            </li>
            <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]">
              <Link href="/">Tienda</Link>
            </li>
            <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]">
              <Link href="/">Productos</Link>
            </li>
           
            <li className="text-center font-inter text-sm font-normal text-[#FEFEFE]">
              <Link href="/">Contacto</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-8 border-t border-[#6C7275] py-6 lg:flex-row lg:justify-between lg:gap-0 lg:py-4">
          <div className="flex items-center justify-center gap-6 lg:order-2">
            <InstagramIcon
              fill="#FEFEFE"
              stroke="#FEFEFE"
              className="h-6 w-6"
            />
            <FacebookIcon stroke="#FEFEFE" className="h-6 w-6" />
            <YoutubeIcon stroke="#FEFEFE" className="h-6 w-6" />
          </div>

          <div className="flex flex-col gap-7 lg:order-1 lg:flex-row">
            <div className="flex justify-center gap-7 lg:order-2">
              <Text size="xs" weight={600} family="poppins" color="white/900">
                Politicas de Privacidad
              </Text>
              <Text size="xs" weight={600} family="poppins" color="white/900">
                Terminos de uso
              </Text>
            </div>

            <Text
              family="poppins"
              size="xs"
              color="white/800"
              className="text-center lg:order-1 lg:text-left"
            >
              Derechos de Autor © 2024 Tu tienda en linea. Todos los derechos reservados
            </Text>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default Footer;
