import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <img
        className="mob"
        height="170px"
        src={require("./images/image-product-mobile.jpg")}
        alt="mobileImg"
      />
      <div className="container">
        <img
          className="desk"
          src={require("./images/image-product-desktop.jpg")}
          alt="desktopImg"
          height="430px"
        />

        <div className="details">
          <div> PERFUME </div> <div>Gabrielle Essence Eau De Parfum </div>
          <div>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>
          <div>
            <span> $149.99 </span> <span> $169.99 </span>
          </div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M8 9h-7.161l-.839-2h8v2zm0 2h-6.322l.839 2h5.483v-2zm8.53-4h-6.53v2h5.966l.564-2zm-1.694 6l.564-2h-5.4v2h4.836zm-6.336 5c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm11.305-15l-3.432 12h-13.017l.839 2h13.659l3.474-12h1.929l.743-2h-4.195zm-6.305 15c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z" />
            </svg>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
