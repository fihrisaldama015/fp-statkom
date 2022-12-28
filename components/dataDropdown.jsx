const DataDropdown = ({ children, change }) => {
  return (
    <select
      id="jenis"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg border-l-gray-100 dark:border-l-gray-700 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={(e) => change(e.target.value)}
    >
      {children}
    </select>
  );
};

export default DataDropdown;
