import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-black overflow-hidden w-full h-16 flex items-center" />
      <div className=" bg-[url(/images/2490.jpg)] md:bg-fixed bg-cover bg-center min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl bg-white shadow-2xl rounded-2xl p-12 text-center ">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">Contáctanos</h1>
          <p className="text-lg text-gray-600 text-center items-center mb-10">
            Si necesitas ayuda, estamos aquí para ti. Puedes comunicarte con
            nosotros a través de nuestras redes sociales o nuestro número de
            teléfono.
          </p>

          <div className="flex flex-wrap gap-8">
            {/* Instagram */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition"
            >
              <FaInstagram size={32} />
              <span>@applebro</span>
            </a>

            {/* Facebook */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition"
            >
              <FaFacebook size={32} />
              <span>Applebro</span>
            </a>

            {/* X (Twitter) */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-amber-500 transition"
            >
              <FaTwitter size={32} />
              <span>@applebro</span>
            </a>

            {/* TikTok */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition"
            >
              <FaTiktok size={32} />
              <span>@applebro</span>
            </a>

            {/* Teléfono */}
            <a
              href="tel:+584242671334"
              className="flex items-center gap-2 text-gray-600 hover:text-sky-500 transition"
            >
              <FaPhoneAlt size={32} />
              <span>+58 424 2671334</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
