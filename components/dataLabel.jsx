const DataLabel = ({ children }) => {
  return (
    <button
      className="w-full items-center py-2.5 px-4 text-sm font-semibold text-left text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
      type="button"
    >
      {children}
    </button>
  );
};

export default DataLabel;
