// config.js
const CONFIG = {
    desktopLayout: 1, 
    mobileLayout: 2, 

    // Datos del Cliente
    business: {
        name: "Tu negocio",
        location: "San Miguel de Tucumán",
        logo: "https://placehold.co/200x200/1a3644/white?text=Logo",
        bgImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop"
    },

    // Estética de Contenedores
    theme: {
        containerColor: "bg-white",
        containerOpacity: "bg-opacity-100",
        isContainerRounded: true,
        hasContainerShadow: true,
    },

    // Estética de Botones
    buttonsStyle: {
        isRounded: true,
        hasShadow: true,
        hasHoverAnimation: true,
        hoverBgColor: "hover:bg-teal-50",
        defaultSize: "py-4 px-6 text-lg",
    },

    // Enlaces (Podés agregar los que quieras)
    links: [
        { 
            text: "📖 Ver Menú Semanal", 
            url: "#",

            customStyle: {
                bgAndText: "bg-[#1a3644] text-white font-bold",
                border: "border-transparent",
                hover: "hover:scale-110 hover:bg-gray-800"
            }
        },
        { 
            text: "💬 Reservar por WhatsApp", 
            url: "#",
            customStyle: {
                bgAndText: "bg-[#25D366] text-white font-semibold",
                border: "border-transparent",
                hover: "hover:scale-105 hover:bg-[#128C7E]"
            }
        },
        { 
            text: "📍 Cómo llegar", 
            url: "#"/*,
            customStyle: {
                bgAndText: "bg-[#25D366] text-white font-semibold",
                border: "border-transparent",
                hover: "hover:scale-105 hover:bg-[#128C7E]"
            }*/
        },
        { 
            text: "📸 Instagram", 
            url: "#"/*,
            customStyle: {
                bgAndText: "bg-[#25D366] text-white font-semibold",
                border: "border-transparent",
                hover: "hover:scale-105 hover:bg-[#128C7E]"
            }*/
        }
    ]
};