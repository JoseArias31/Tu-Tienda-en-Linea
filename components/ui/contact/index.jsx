import Heading from "@/ui/head";
import Text from "@/ui/text";
import SectionLayout from "@/layouts/sectionLayout";

function Contact () {
    return (

        <SectionLayout>
        <div className="space-y-10 px-8 py-10 text-center">
        <Heading as="h2" intent="base-section">
              Contacto
            </Heading>
          <div className="space-y-4 text-center flex justify-evenly flex-row items-center">
         <div className="mt-0">
            <Text weight={700} transform="uppercase" color="gray">
              Telefono
            </Text>
           
            <Text size="sm">
            +57 321 4290038
            </Text>
            </div>
            <div className="mt-0" style={{margin:'0'}}>
            <Text weight={700} transform="uppercase" color="gray" >
              Correo
            </Text>
           
            <Text size="sm">
            tiendainformaticasion@gmail.com
            </Text>
            </div>
            <div style={{margin:'0'}}>            
            <Text weight={700} transform="uppercase" color="gray">
              Horario de Atencion
            </Text>
           
            <Text size="sm">
           Todos los dias / 8:00 am - 8:00 pm 
            </Text>
            </div>
          </div>
        </div>
      </SectionLayout>
    )
} 

export default Contact;