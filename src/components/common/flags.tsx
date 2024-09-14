import Image, { ImageProps } from "next/image";

const Flags = {
  Lithuania: (props: Omit<ImageProps, "src" | "alt">) => {
    return <Image src="/flags/Lithuania.png" alt="Lithuania" {...props} />;
  },
};

export { Flags };
