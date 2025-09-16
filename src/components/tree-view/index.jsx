import MenuList from './MenuList.jsx';

export default function TreeView({ menus = [] }) {
  return (
    <div className="min-h-screen w-[350px] bg-[rgb(0,71,110)]">
      <MenuList list={menus} />
    </div>
  );
}
