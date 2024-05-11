import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-[#262626]">
      <Container>
        <div className="py-2 flex flex-col lg:flex-row items-center">
          <h3 className="text-[#C0C0C0] text-sm font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Website currently under construction. Check back soon for updates.
            (05/11/2024)
          </h3>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
