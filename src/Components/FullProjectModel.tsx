import { Badge, Indicator, Modal, Image, Group, Text, Button, ScrollArea } from "@mantine/core";

const FullProjectModel = (props: any) => {
  return (
    <Modal.Root
    scrollAreaComponent={ScrollArea.Autosize}
      size="70%"
      className="font-mono"
      opened={props.opened}
      onClose={props.close}>
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
          <Modal.Title data-autofocus className="!text-4xl text-White flex gap-3 items-center !font-bold ">
            {props.title}
            {props.live === true && (
              <Badge
              className="flex items-center gap-1"
              size="lg"
                variant="outline"
                color="red"
                rightSection={
                  <Indicator
                    color="red"
                    position="middle-end"
                    size={10}
                    processing></Indicator>
                }>
                Live{" "}
              </Badge>
            )}
          </Modal.Title>
          <Modal.CloseButton
            size="md"
            iconSize="30px"
            className="!bg-bgColor !text-primaryColor"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor !pt-2 !border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
          <Image
                 className="!rounded-xl  !shadow-[0_0_5px_0_#64FFDA]"
                   src={props.image}
                   alt={props.image}
         />
         <Group mt="md" mb="md">
                 {props.technologies.map((tech:string, index:number) => <Badge key={index} size="xl" variant="light" color="#64FFDA">{tech}</Badge>)}
        </Group>

        <Text className="!text-justify"  size="lg" c="dimmed">
                {props.decs}
        </Text>
        
        <Group mt="md" justify="space-between">
           <a href={props.github} target="blank" className="w-[48%]"> <Button  variant="outline" size="lg" color="#64FFDA"  fullWidth mt="md" radius="md">
                   View Code
            </Button> 
            </a>
            
            <a href={props.link} target="blank"  className="w-[48%]">
            <Button  className="!text-bgColor" size="lg" color="#64FFDA"  fullWidth mt="md" radius="md">
                  View Live App
             </Button>
            </a>

        </Group>

        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
export default FullProjectModel;
