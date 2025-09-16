import useLocalStorage from './useLocalStorage.jsx';

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      className={`min-h-screen min-w-screen flex items-center justify-center transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-md">
        <p className="text-xl font-semibold mb-4">Hello World</p>
        <button
          onClick={handleToggleTheme}
          className="px-4 py-2 rounded-lg font-medium transition-colors duration-300
          bg-blue-500 text-white hover:bg-blue-600"
        >
          Change theme
        </button>
      </div>
    </div>
  );
}
