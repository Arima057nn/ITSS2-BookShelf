import Bookitem from "../components/bookitem";

export default function Home() {
  return (
    <div>
      <div className="flex w-full px-8 pt-8 pb-4 font-medium text-lg">
        <div className="w-4/12">Title</div>
        <div className="w-2/12">Category</div>
        <div className="w-2/12 text-center">Status</div>
        <div className="w-3/12 text-center">Library</div>
      </div>
      <Bookitem />
    </div>
  );
}
