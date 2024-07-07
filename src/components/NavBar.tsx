import Image from "next/image";

const NavBar = () => {
  return (
    <div className="flex flex-col w-[5.5rem] h-screen items-center justify-between p-4 bg-slate-200">
      <div className="flex flex-col items-center gap-6">
        <Image src="/logo.svg" alt="logo" width={56} height={56} />
        <div className="flex flex-col gap-10">
          <Image src="/coins-swap.svg" alt="" width={16} height={16} />
          <Image src="/coins-hand.svg" alt="" width={16} height={16} />
          <Image src="/icon.svg" alt="" width={16} height={16} />
          <Image src="/scales.svg" alt="" width={16} height={16} />
          <Image src="/bar-chart.svg" alt="" width={16} height={16} />
          <Image src="/grid.svg" alt="" width={16} height={16} />
        </div>
      </div>
      <div>
        <Image src="/default.svg" alt="default-logo" width={56} height={56} />
      </div>
    </div>
  );
};

export default NavBar;
