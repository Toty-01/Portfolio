import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image 
    src={'/avatars.png'}
    width={600}
    height={600}
    alt="anthony cauche photo"
    className=""
    />
  </div>;
};

export default Avatar;
