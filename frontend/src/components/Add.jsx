import cartSvg from "../assets/cart.svg";
import api from "../api/axios";

function Add({ component, type }) {

  const handleAdd = async () => {
    if (!type || !component?.id) {
      alert("Nothing to add");
      return;
    }

    try {
      await api.post("/cart/add", {
        type,
        id: component.id,
      });

      alert("Added to cart ✅");
    } catch (err) {
      const message =
        err.response?.data?.message || "Failed to add component";
      alert(message);
    }
  };

  return (
    <div className="pt-4">
      <button
        type="button"
        onClick={handleAdd}
        className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group overflow-hidden"
      >
        {/* Sliding Green Box */}
        <div
          className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center 
                     absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
        >
          <img src={cartSvg} alt="cart icon" className="h-6 w-6" />
        </div>

        {/* Text */}
        <p className="translate-x-2">Add to Cart</p>
      </button>
    </div>
  );
}

export default Add;
