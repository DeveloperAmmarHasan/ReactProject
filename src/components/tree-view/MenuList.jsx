import MenuItem from './MenuItem.jsx';

export default function MenuList({ list = [] }) {
  return (
    <ul className="list-none mt-0 mb-0">
      {list && list.length > 0
        ? list.map((listItem) => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}
