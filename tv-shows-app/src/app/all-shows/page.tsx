import ShowList from "@/components/shared/ShowList/ShowList";
import { mockShowList } from "../../../public/mockShowLIst";

export default function AllShows() {
  return <ShowList topRated={false} />;
}
