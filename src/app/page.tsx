import { ChevronRight, Target, Users, BarChart3, Building2, Mail, Phone, MapPin, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      {/* Navigation - Minimal & Elegant */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50 transition-all">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-bold text-[var(--color-teal)] tracking-tighter">KAYREN</span>
            </div>
            <div className="hidden md:flex space-x-12 items-center">
              <a href="#estrategia" className="text-sm font-medium text-gray-900 hover:text-[var(--color-terracotta)] transition-colors">Estrategia</a>
              <a href="#rrhh" className="text-sm font-medium text-gray-900 hover:text-[var(--color-terracotta)] transition-colors">Recursos Humanos</a>
              <a href="#resultados" className="text-sm font-medium text-gray-900 hover:text-[var(--color-terracotta)] transition-colors">Resultados</a>
            </div>
            <div className="hidden md:flex">
              <a href="#contacto" className="text-sm font-semibold bg-black text-white px-7 py-3.5 rounded-full hover:bg-[var(--color-terracotta)] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-black/10">
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Bold & Venture Style */}
      <section className="relative pt-40 pb-32 lg:pt-56 lg:pb-40 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium mb-8 text-gray-600">
                <span className="w-2 h-2 rounded-full bg-[var(--color-terracotta)] mr-3 animate-pulse"></span> 
                Parte de Lupitex Consulting Group
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-8 text-gray-900">
                Precisión <br className="hidden sm:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-teal)] to-[var(--color-terracotta)]">
                  estratégica.
                </span><br />
                Calidez humana.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-500 mb-12 max-w-2xl font-light leading-relaxed">
                Consultoría de alto nivel en estrategia corporativa y desarrollo de talento humano. Diseñamos el futuro de tu organización para escalar con propósito.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="#contacto" className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-full text-white bg-[var(--color-teal)] hover:bg-[var(--color-teal)]/90 transition-all duration-300 shadow-xl shadow-teal-900/20 group">
                  Iniciar transformación <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href="#estrategia" className="inline-flex justify-center items-center px-8 py-4 text-base font-semibold rounded-full text-gray-900 bg-white border-2 border-gray-200 hover:border-gray-900 hover:bg-gray-50 transition-all duration-300">
                  Explorar servicios
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
                <Image 
                  src="/assets/hero-strategy.png" 
                  alt="Modern executive meeting room" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900">98%</p>
                    <p className="text-sm font-medium text-gray-500">Proyectos exitosos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Section - Bento Grid Concept */}
      <section id="estrategia" className="py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-terracotta)] uppercase mb-4">01. Estrategia</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Transformamos visión <br/>en planes ejecutables.
            </h3>
            <p className="text-xl text-gray-500 font-light">
              Desarrollamos marcos estratégicos sólidos que aseguran el crecimiento sostenible y la ventaja competitiva en el mercado actual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main large card */}
            <div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-white shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-1/2 h-full">
                <Image 
                  src="/assets/strategy-whiteboard.png" 
                  alt="Estrategia corporativa" 
                  fill
                  className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
              </div>
              <div className="relative z-10 p-12 h-full flex flex-col justify-center max-w-[60%]">
                <div className="w-14 h-14 bg-[var(--color-teal)]/10 rounded-2xl flex items-center justify-center mb-8">
                  <Target className="w-7 h-7 text-[var(--color-teal)]" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Planificación Estratégica</h4>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Análisis profundo del entorno y estructura para definir rutas de acción claras hacia los objetivos corporativos.
                </p>
                <ul className="space-y-3 mt-auto">
                  {["Análisis competitivo", "Modelos operativos", "Gestión del cambio"].map((item, i) => (
                    <li key={i} className="flex items-center text-sm font-medium text-gray-700">
                      <ChevronRight className="w-4 h-4 text-[var(--color-terracotta)] mr-2" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Small card 1 */}
            <div className="bg-[var(--color-teal)] rounded-[2rem] p-10 text-white flex flex-col justify-between hover:shadow-2xl hover:shadow-teal-900/20 transition-all duration-500">
              <div>
                <h4 className="text-2xl font-bold mb-4">Ejecución</h4>
                <p className="text-white/80 font-light">La estrategia no es nada sin una implementación táctica rigurosa.</p>
              </div>
              <div className="mt-12 flex justify-end">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[var(--color-teal)] transition-colors cursor-pointer">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HR Section - Clean Minimal Layout */}
      <section id="rrhh" className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image 
                src="/assets/hr-meeting.png" 
                alt="Recursos Humanos" 
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold tracking-widest text-[var(--color-terracotta)] uppercase mb-4">02. Talento Humano</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                El talento es el motor <br/>de tu empresa.
              </h3>
              <p className="text-xl text-gray-500 font-light mb-12 leading-relaxed">
                Diseñamos culturas organizacionales excepcionales y procesos de gestión de personas que atraen, desarrollan y retienen a los mejores profesionales de la industria.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Cultura Organizacional", desc: "Alineación del equipo con el propósito corporativo." },
                  { title: "Desarrollo de Liderazgo", desc: "Formación de ejecutivos y líderes de alto impacto." },
                  { title: "Retención y Onboarding", desc: "Sistemas para maximizar el ciclo de vida del empleado." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[var(--color-terracotta)]/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mr-5 flex-shrink-0">
                      <Users className="w-6 h-6 text-[var(--color-terracotta)]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - Dark & Impactful */}
      <section id="resultados" className="py-32 bg-black text-white relative overflow-hidden">
        {/* Abstract background image */}
        <div className="absolute inset-0 opacity-40">
           <Image 
            src="/assets/results-abstract.png" 
            alt="Abstract data" 
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-widest text-[var(--color-terracotta)] uppercase mb-4">03. Impacto</h2>
            <h3 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Resultados que trascienden.</h3>
            <p className="text-xl text-white/60 font-light">
              Nuestra metodología está diseñada para generar un retorno de inversión claro y medible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", metric: "Estrategia", desc: "Planes de acción claros, medibles y orientados a resultados financieros concretos." },
              { num: "02", metric: "Cultura", desc: "Equipos alineados con el propósito corporativo y con altos índices de satisfacción." },
              { num: "03", metric: "Eficiencia", desc: "Optimización de procesos internos para maximizar recursos y talento." }
            ].map((item, index) => (
              <div key={index} className="p-10 border border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-md hover:bg-white/10 hover:-translate-y-2 transition-all duration-500">
                <span className="text-5xl font-light text-white/20 block mb-6">{item.num}</span>
                <h3 className="text-2xl font-bold text-white mb-4">{item.metric}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / About Us - Minimal & Structured */}
      <footer id="contacto" className="bg-[var(--background)] border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5 pr-8">
              <span className="text-3xl font-bold tracking-tighter text-[var(--color-teal)] mb-6 block">KAYREN</span>
              <p className="text-gray-500 mb-8 max-w-md text-lg font-light leading-relaxed">
                Consultoría de Negocios, Estrategia & RRHH. Aportamos profesionalismo, precisión y calidez humana a cada desafío corporativo.
              </p>
              <div className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-600 bg-gray-50">
                <Building2 className="w-4 h-4 mr-2 text-[var(--color-terracotta)]" />
                Miembro de Lupitex Consulting Group
              </div>
            </div>
            
            <div className="lg:col-span-3 lg:col-start-7">
              <h4 className="text-sm font-bold tracking-widest text-gray-900 uppercase mb-6">Navegación</h4>
              <ul className="space-y-4">
                <li><a href="#estrategia" className="text-gray-500 hover:text-[var(--color-terracotta)] font-medium transition-colors">Estrategia Corporativa</a></li>
                <li><a href="#rrhh" className="text-gray-500 hover:text-[var(--color-terracotta)] font-medium transition-colors">Recursos Humanos</a></li>
                <li><a href="#resultados" className="text-gray-500 hover:text-[var(--color-terracotta)] font-medium transition-colors">Resultados e Impacto</a></li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold tracking-widest text-gray-900 uppercase mb-6">Contacto</h4>
              <ul className="space-y-5">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-[var(--color-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-500 font-medium">Kayren LLC<br/>25 SW 9th St, Suite 406<br/>Miami, FL, 33130</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-[var(--color-teal)] flex-shrink-0" />
                  <a href="mailto:contacto@kayren.com" className="text-gray-500 hover:text-[var(--color-terracotta)] font-medium transition-colors">contacto@kayren.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-gray-400">
            <p>© {new Date().getFullYear()} Kayren LLC. Todos los derechos reservados.</p>
            <p className="mt-4 md:mt-0">Una empresa de <span className="text-gray-900">Lupitex Consulting Group LLC</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

