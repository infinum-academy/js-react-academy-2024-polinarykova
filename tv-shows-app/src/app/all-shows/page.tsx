import ShowList from "@/components/shared/ShowList/ShowList";
import SidebarNavigation from "@/components/shared/SidebarNavigation/SideBarNavigation";
import { mockShowList } from "../../../public/mockShowLIst";

export default function AllShows() {
  return <ShowList showList={mockShowList}></ShowList>;
}
