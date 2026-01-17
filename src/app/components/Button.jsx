import Loader from "./Loader";

const Button = ({
  label,
  loading = false,
  type = "submit",
  className = "flex justify-center text-center  bg-secondary hover:bg-red-600 dark:bg-primary dark:hover:bg-primary/90 text-black hover:text-white",
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`relative w-full font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
    >
      {label}
      {loading && (
        <Loader className="w-5 h-5  absolute right-3 top-2.5"  />
      )}
    </button>
  );
};

export default Button;
