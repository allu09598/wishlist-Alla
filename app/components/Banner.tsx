import Image from "next/image";

export default function Banner() {
  return (
    <Image
      src="/images/banner.jpg"
      alt="Wishlist Banner"
      width={1600}
      height={700}
      priority
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "30px",
        display: "block",
      }}
    />
  );
}