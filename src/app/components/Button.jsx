import Loader from "./Loader";

/**
 * Shared button used across cart, checkout, and other non-auth pages.
 * Auth pages (login/register) render their submit button inline so the
 * loader can replace the label — this component is for everywhere else.
 *
 * Default className updated to Aetheric tokens (was bg-secondary hover:bg-red-600).
 * Pass a custom className to override for destructive/secondary actions.
 */
const Button = ({
  label,
  loading = false,
  type = "submit",
  className = "w-full flex justify-center items-center bg-primary text-on-primary hover:opacity-90",
}) => {
  return (
    <button
      type={type}
      disabled={loading}
      className={`relative font-medium rounded-full text-sm px-5 py-3 text-center transition-opacity disabled:opacity-60 ${className}`}
    >
      {label}
      {loading && <Loader className="w-5 h-5 absolute right-4 top-3 fill-on-primary" />}
    </button>
  );
};

export default Button;
