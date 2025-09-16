import Tabs from './tabs.jsx';

function RandomComponent() {
  return <h1>Some Random Component</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: 'Tab 1',
      content: <div>this is content for tab 1</div>,
    },
    {
      label: 'Tab 2',
      content: <div>this is content for tab 2</div>,
    },
    {
      label: 'Tab 3',
      content: <RandomComponent />,
    },
  ];
  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex);
  };
  return <Tabs tabContent={tabs} onChange={handleChange} />;
}
