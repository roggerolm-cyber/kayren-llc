import { ChevronRight, Target, Users, BarChart3, Building2, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-[var(--color-teal)] tracking-tight">KAYREN</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#estrategia" className="text-sm font-medium text-gray-600 hover:text-[var(--color-teal)] transition-colors">Estrategia</a>
              <a href="#rrhh" className="text-sm font-medium text-gray-600 hover:text-[var(--color-teal)] transition-colors">Recursos Humanos</a>
              <a href="#resultados" className="text-sm font-medium text-gray-600 hover:text-[var(--color-teal)] transition-colors">Resultados</a>
              <a href="#contacto" className="text-sm font-medium bg-[var(--color-teal)] text-white px-5 py-2.5 rounded-sm hover:bg-[var(--color-teal)]/90 transition-colors">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[var(--color-teal)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 bg-white/10 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="text-[var(--color-terracotta)] mr-2">●</span> Parte de Lupitex Consulting Group
            </div>
            <h1 className="text-5xl lg:text-7xl font-semibold leading-tight mb-6">
              Precisión con <br />
              <span className="text-[var(--color-terracotta)]">calidez humana.</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl font-light">
              Consultoría especializada en estrategia de negocios y desarrollo de talento humano. Diseñamos el futuro de tu organización con soluciones profesionales, confiables y a medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#estrategia" className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-base font-medium rounded-sm text-[var(--color-teal)] bg-white hover:bg-gray-50 transition-colors">
                Descubre nuestros servicios
              </a>
              <a href="#contacto" className="inline-flex justify-center items-center px-6 py-3.5 border border-white/30 text-base font-medium rounded-sm text-white hover:bg-white/10 transition-colors">
                Hablar con un consultor <ChevronRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Estrategia Section */}
      <section id="estrategia" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-white shadow-sm rounded-sm flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[var(--color-terracotta)]" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-teal)] mb-6">
                Estrategia Corporativa
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Transformamos visiones en planes ejecutables. Analizamos profundamente el entorno y la estructura organizacional para desarrollar marcos estratégicos sólidos que aseguren el crecimiento sostenible.
              </p>
              <ul className="space-y-4">
                {[
                  "Planificación estratégica a largo plazo",
                  "Análisis competitivo y posicionamiento",
                  "Diseño de modelos operativos",
                  "Gestión del cambio y transformación"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[var(--color-teal)]/10 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[var(--color-teal)]"></div>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                alt="Consultor diseñando estrategia en pizarra" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HR Section */}
      <section id="rrhh" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse">
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-xl lg:order-first">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Reunión profesional de equipo" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="w-12 h-12 bg-gray-50 shadow-sm rounded-sm flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[var(--color-teal)]" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-[var(--color-teal)] mb-6">
                Recursos Humanos
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                El talento es el motor de tu empresa. Diseñamos culturas organizacionales excepcionales y procesos de gestión de personas que atraen, desarrollan y retienen a los mejores profesionales.
              </p>
              <ul className="space-y-4">
                {[
                  "Diseño de cultura organizacional",
                  "Programas de onboarding y retención",
                  "Desarrollo de liderazgo ejecutivo",
                  "Evaluación de clima y desempeño"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-[var(--color-terracotta)]/10 flex items-center justify-center mr-3 mt-0.5">
                      <div className="h-2 w-2 rounded-full bg-[var(--color-terracotta)]"></div>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results / Metrics Section */}
      <section id="resultados" className="py-24 bg-[var(--color-graphite)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-8">
            <BarChart3 className="w-8 h-8 text-[var(--color-terracotta)]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-16">Resultados que trascienden</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "Estrategia", desc: "Planes de acción claros, medibles y orientados a resultados financieros concretos." },
              { metric: "Cultura", desc: "Equipos alineados con el propósito corporativo y con altos índices de satisfacción." },
              { metric: "Eficiencia", desc: "Optimización de procesos internos para maximizar recursos y talento." }
            ].map((item, index) => (
              <div key={index} className="p-8 border border-white/10 rounded-sm bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors text-left">
                <h3 className="text-xl font-semibold text-[var(--color-terracotta)] mb-4">{item.metric}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / About Us */}
      <footer id="contacto" className="bg-[var(--color-teal)] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <span className="text-2xl font-bold tracking-tight text-white mb-6 block">KAYREN</span>
              <p className="text-white/70 mb-6 max-w-md">
                Consultoría de Negocios, Estrategia & RRHH. Aportamos profesionalismo, precisión y calidez humana a cada desafío corporativo.
              </p>
              <div className="inline-block px-4 py-2 border border-white/20 rounded-sm text-sm">
                A member of <span className="font-semibold text-[var(--color-terracotta)]">Lupitex Consulting Group</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Compañía</h4>
              <ul className="space-y-4 text-white/70">
                <li><a href="#estrategia" className="hover:text-white transition-colors">Estrategia Corporativa</a></li>
                <li><a href="#rrhh" className="hover:text-white transition-colors">Recursos Humanos</a></li>
                <li><a href="#resultados" className="hover:text-white transition-colors">Metodología y Resultados</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contacto</h4>
              <ul className="space-y-4 text-white/70">
                <li className="flex items-start">
                  <Building2 className="w-5 h-5 mr-3 text-[var(--color-terracotta)] flex-shrink-0" />
                  <span>Kayren LLC</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[var(--color-terracotta)] flex-shrink-0" />
                  <span>25 SW 9th St, Suite 406<br/>Miami, FL, 33130</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-[var(--color-terracotta)] flex-shrink-0" />
                  <a href="mailto:contacto@kayren.com" className="hover:text-white transition-colors">contacto@kayren.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
            <p>© {new Date().getFullYear()} Kayren LLC. Todos los derechos reservados.</p>
            <p className="mt-4 md:mt-0">Una empresa de Lupitex Consulting Group LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
