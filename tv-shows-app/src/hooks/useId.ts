import { usePathname } from "next/navigation";

export default function useId() {
  const path = usePathname();
  const show_id = path?.split("/")[2];
  return show_id;
}
