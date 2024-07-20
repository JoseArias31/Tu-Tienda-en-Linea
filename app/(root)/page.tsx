'use client'
// package
import Link from "next/link";
import Image from "next/image";
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'


// layouts
import SectionLayout from "@/layouts/sectionLayout";

// ui
import Button from "@/ui/button";
import Heading from "@/ui/head";
import Text from "@/ui/text";
import CatalogSlider from "@/ui/slider/catalogSlider";
import * as ProductCard from "@/ui/card/productCard";

import {
  ArrowRightIcon,
  CallIcon,
  DeliveryIcon,
  LockIcon,
  MoneyIcon,
} from "@/ui/assets/svg";

import products from "@/data/product.json";

export default function Home() {
  return (
    <>
     <FloatingWhatsApp 
      phoneNumber="573214290038" // Reemplaza con tu número de teléfono en formato internacional
      accountName="Tienda Informatica" // Nombre que aparecerá en el widget
      avatar= '/images/logo2.png'
      statusMessage="Normalmente responde en 5 minutos" // Mensaje de estado debajo del nombre de la cuenta
      chatMessage="¡Hola! 🤝 ¿Cómo podemos ayudarte?" // Mensaje inicial en el cuadro de chat
      placeholder="Escribe un mensaje..." // Placeholder del campo de entrada del chat
      messageDelay={2} // Retraso en segundos antes de mostrar el mensaje de chat
      darkMode={false} // Estilo oscuro
      allowClickAway={false} // Permite cerrar el chat al hacer clic fuera del cuadro
      allowEsc={true} // Permite cerrar el chat al presionar la tecla Escape
      className="fixed bottom-4 right-4 z-50" // Clase CSS para el contenedor del widget
      buttonClassName="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full" // Clase CSS para el botón
      style={{ bottom: 20, right: 20 }} // Estilo en línea para el contenedor
      buttonStyle={{ backgroundColor: '#25D366' }} // Estilo en línea para el botón
      chatboxHeight={320} // Altura del cuadro de chat en píxeles
      chatboxClassName="floating-whatsapp-chatbox" // Clase CSS para el cuadro de chat
      chatboxStyle={{}} // Estilo en línea para el cuadro de chat
      notification={true} // Habilita las notificaciones
      notificationDelay={60} // Retraso entre notificaciones en segundos
      notificationSound={false} // Desactiva el sonido de notificación
      notificationSoundSrc="https://example.com/notification-sound.mp3" // URL personalizada para el sonido de notificación
      notificationLoop={0} // Número de veces que se repite el loop de notificaciones, 0 para infinito
      notificationStyle={{}} // Estilo en línea para el indicador de notificaciones
      notificationClassName="floating-whatsapp-notification" // Clase CSS para el indicador de notificaciones
     />
      {/* Hero section */}
      <SectionLayout
        bg="bg-[#5275c7]"
        className="flex flex-col items-center justify-between lg:grid lg:grid-cols-2 lg:pt-8"
      >
        {/* Text content */}
        <div className="flex flex-col items-center gap-4 p-8 sm:max-w-[600px] md:max-w-[600px] md:py-16 lg:order-2 lg:max-w-none lg:items-start lg:p-0">
          <div className="space-y-2 text-center lg:text-left">
            <Heading as="h1" intent="hero-section">
              Los Mejores <span className="text-[#fff]">Computadores</span>{" "}
              
            </Heading>
            <Text className="md:text-lg lg:text-xl">
              <strong>Precios increibles y entregas inmediatas a toda Colombia!</strong>
            </Text>
          </div>
          <Button fontSize="sm" className="px-14 py-3 md:text-lg">
            Compra Ahora!
          </Button>
        </div>

        {/* Image content */}
        <div className="flex h-auto w-full items-end justify-center overflow-hidden lg:order-1">
          <Image
            src="/images/main.png"
            width={600}
            height={761}
            alt="Girl-enjoying her Laptop"
            className="w-full max-w-[360px] object-cover object-top lg:max-w-[420px] xl:max-w-[460px]"
          />
        </div>
      </SectionLayout>

      {/* Product section */}
      <SectionLayout>
        <div className="space-y-10 p-8">
          <Heading
            as="h2"
            intent="base-section"
            className="text-center md:text-left"
          >
            Nuevos Equipos!
          </Heading>

          {/* catalog product slider */}
          <CatalogSlider />
        </div>
      </SectionLayout>

      {/* Shop collection section */}
      <SectionLayout>
        <div className="space-y-4 px-8 py-10 sm:space-y-8 md:space-y-12">
          <Heading
            as="h2"
            intent="base-section"
            className="text-center md:text-left"
          >
            Colecciones
          </Heading>

          <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 lg:h-[560px]">
            {/* Main collection */}
            <div className="relative aspect-[0.8/1] min-h-[377px] w-full min-w-[311px] bg-[#F3F5F7] p-8 sm:row-span-2 sm:aspect-auto sm:h-full sm:min-w-0">
              <div className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden">
                <Image
                  src="/images/sumplekuping-2.png"
                  width={262}
                  height={349}
                  alt="background collection"
                  className="aspect-[0.75/1] w-[80%] -translate-y-[10%] object-center md:w-[60%]"
                />
              </div>

              <div className="relative flex h-full flex-col justify-end gap-2">
                <Heading as="h3" intent="collection-card">
                  Laptops
                </Heading>
                <Link href="/shop" className="w-fit">
                  <span className="flex w-fit items-center gap-1 border-b border-[#121212]">
                    Bodega{" "}
                    <ArrowRightIcon stroke="#121212" className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Another collection */}
            <div className="relative aspect-[1/0.5] min-h-[180px] w-full min-w-[311px] bg-[#F3F5F7] p-8 sm:aspect-auto sm:h-full sm:min-w-0">
              <div className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden">
                <Image
                  src="/images/sumplekuping-4.png"
                  width={262}
                  height={349}
                  alt="background collection"
                  className="aspect-[0.75/1] w-[50%] translate-x-1/2 md:w-[40%]"
                />
              </div>

              <div className="relative flex h-full flex-col justify-end gap-2">
                <Heading as="h3" intent="collection-card">
                  Celulares
                </Heading>
                <Link href="/shop" className="w-fit">
                  <span className="flex w-fit items-center gap-1 border-b border-[#121212]">
                    Bodega{" "}
                    <ArrowRightIcon stroke="#121212" className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Another collection */}
            <div className="relative aspect-[1/0.5] min-h-[180px] w-full min-w-[311px] bg-[#F3F5F7] p-8 sm:aspect-auto sm:h-full sm:min-w-0">
              <div className="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden">
                <Image
                  src="/images/sumplekuping-5.png"
                  width={262}
                  height={349}
                  alt="background collection"
                  className="aspect-[0.75/1] w-[50%] translate-x-1/2 md:w-[40%]"
                />
              </div>

              <div className="relative flex h-full flex-col justify-end gap-2">
                <Heading as="h3" intent="collection-card">
                  Accesorios
                </Heading>
                <Link href="/shop" className="w-fit">
                  <span className="flex w-fit items-center gap-1 border-b border-[#121212]">
                    Bodega{" "}
                    <ArrowRightIcon stroke="#121212" className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Best seller section */}
      <SectionLayout>
        <div className="space-y-4 px-8 py-10 sm:space-y-8 md:space-y-12 lg:pb-24">
          <Heading
            as="h2"
            intent="base-section"
            className="text-center md:text-left"
          >
            Productos Populares
          </Heading>

          <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-8 xl:grid-cols-5">
            {products.map((product) => (
              <ProductCard.Root key={product.id} data={product}>
                <ProductCard.Thumbnail>
                  <ProductCard.ThumbnailBadge>
                    <ProductCard.Badge>Nuevo</ProductCard.Badge>
                    <ProductCard.WishlistButton />
                  </ProductCard.ThumbnailBadge>

                  <ProductCard.Image />
                </ProductCard.Thumbnail>

                <ProductCard.Content>
                  <ProductCard.Ratings />
                  <ProductCard.Name />
                  <ProductCard.Price />
                </ProductCard.Content>
              </ProductCard.Root>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Promotion section */}
      <div className="grid overflow-hidden md:grid-cols-2 lg:h-full lg:max-h-[500px] lg:place-items-center">
        <div className="w-full justify-end bg-[#455483] md:flex">
          <Image
            src="/images/promotion-card.png"
            width={1250}
            height={1080}
            alt="promotion-card"
            className="h-auto w-full object-cover lg:w-[460px]"
          />
        </div>

        <div className="order-1 w-full bg-[#5275c7] md:order-2">
          <div className="w-full max-w-[720px] space-y-6 p-8">
            <div className="space-y-4">
              <Text weight={700} transform="uppercase" color="white">
                Promocion
              </Text>
              <Heading as="h2" intent="base-section">
                Apresurate! 5% de descuento
              </Heading>
              <Text size="sm">Cientos de productos de alta tecnologia esperan por ti</Text>
            </div>
            <div className="space-y-3">
              <Text>La oferta expira en:</Text>
              <div className="flex gap-4">
                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-white">
                    <Text
                      size="3xl"
                      weight={500}
                      family="poppins"
                      color="black/800"
                    >
                      02
                    </Text>
                  </div>
                  <Text size="xs" color="black/800" className="text-center">
                    Dias
                  </Text>
                </div>
                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-white">
                    <Text
                      size="3xl"
                      weight={500}
                      family="poppins"
                      color="black/800"
                    >
                      12
                    </Text>
                  </div>
                  <Text size="xs" color="black/800" className="text-center">
                    Horas
                  </Text>
                </div>
                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-white">
                    <Text
                      size="3xl"
                      weight={500}
                      family="poppins"
                      color="black/800"
                    >
                      45
                    </Text>
                  </div>
                  <Text size="xs" color="black/800" className="text-center">
                    Minutos
                  </Text>
                </div>
                <div className="w-fit">
                  <div className="flex h-[60px] w-[60px] items-center justify-center bg-white">
                    <Text
                      size="3xl"
                      weight={500}
                      family="poppins"
                      color="black/800"
                    >
                      05
                    </Text>
                  </div>
                  <Text size="xs" color="black/800" className="text-center">
                    Segundos
                  </Text>
                </div>
              </div>
            </div>
            <Button fontSize="sm" className="py-1.5 md:text-base">
              Compra Ahora
            </Button>
          </div>
        </div>
      </div>

      {/* Features section */}
      <SectionLayout>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 p-8 md:grid-cols-4 lg:gap-6 lg:py-10">
          <div className="space-y-4 bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <DeliveryIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text
                size="sm"
                weight={600}
                family="poppins"
                color="black/800"
                className="lg:text-xl"
              >
                Envio Gratis
              </Text>
              <Text size="sm" color="gray">
                Mayores a $100.000
              </Text>
            </div>
          </div>
          <div className="space-y-4 bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <MoneyIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text
                size="sm"
                weight={600}
                family="poppins"
                color="black/800"
                className="lg:text-xl"
              >
                Reembolsos
              </Text>
              <Text size="sm" color="gray">
                30 dias de garantia
              </Text>
            </div>
          </div>
          <div className="space-y-4 bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <LockIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text
                size="sm"
                weight={600}
                family="poppins"
                color="black/800"
                className="lg:text-xl"
              >
                Metodos de pago seguro
              </Text>
              <Text size="sm" color="gray">
                Pagos Encriptados
              </Text>
            </div>
          </div>
          <div className="space-y-4 bg-[#F3F5F7] px-4 py-8 lg:px-8 lg:py-12">
            <CallIcon className="h-12 w-12" />
            <div className="space-y-1 md:space-y-2">
              <Text
                size="sm"
                weight={600}
                family="poppins"
                color="black/800"
                className="lg:text-xl"
              >
                Soporte 24/7
              </Text>
              <Text size="sm" color="gray">
                Telefono, chat y correo
              </Text>
            </div>
          </div>
        </div>
      </SectionLayout>

      {/* Newsfeed section */}
      <SectionLayout>
        <div className="space-y-10 px-8 py-10">
          <div className="space-y-4 text-center">
            <Text weight={700} transform="uppercase" color="gray">
              Noticias
            </Text>
            <Heading as="h2" intent="base-section">
              Instagram
            </Heading>
            <Text size="sm">
              Siguenos en Instagram para recibir mas descuentos
            </Text>
            <Text size="xl" weight={500} family="poppins" color="gray">
              @tutiendaenlinea
            </Text>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
