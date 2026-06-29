import { AlertCircle, CheckCircle2, Clock, FileText, Activity } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Resumen general del estado de cumplimiento y documentación.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-white dark:bg-slate-900 border border-border rounded-lg shadow-sm text-sm font-medium flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Sistema en Línea
          </div>
        </div>
      </header>

      {/* Stats Cards - Now clickable */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/formatos" className="block focus:outline-none focus:ring-2 focus:ring-red-500 rounded-2xl">
          <div className="h-full bg-white dark:bg-slate-900 p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-red-300 dark:hover:border-red-900/50 transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <AlertCircle className="w-24 h-24 text-red-500" />
            </div>
            <div className="flex justify-between items-start relative z-10">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Acción Requerida</p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">2</h3>
                <p className="text-sm text-red-500 font-medium mt-1">Formatos diarios pendientes</p>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-xl group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
            </div>
          </div>
        </Link>

        <Link href="/documentos" className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl">
          <div className="h-full bg-white dark:bg-slate-900 p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-900/50 transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <FileText className="w-24 h-24 text-blue-500" />
            </div>
            <div className="flex justify-between items-start relative z-10">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Documentos Fijos</p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">5</h3>
                <p className="text-sm text-slate-500 mt-1">Programas de saneamiento activos</p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
            </div>
          </div>
        </Link>

        <Link href="/cumplimiento" className="block focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-2xl">
          <div className="h-full bg-white dark:bg-slate-900 p-6 rounded-2xl border border-border/50 shadow-sm hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-900/50 transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <CheckCircle2 className="w-24 h-24 text-emerald-500" />
            </div>
            <div className="flex justify-between items-start relative z-10">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Cumplimiento</p>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">92%</h3>
                <p className="text-sm text-emerald-600 font-medium mt-1 group-hover:underline">+4% desde el mes pasado</p>
              </div>
              <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Quick Actions / Pending Forms */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-border/50 shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Formatos por llenar hoy</h2>
          <div className="space-y-4">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/50 rounded-xl gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-white dark:bg-slate-800 p-2 rounded-lg shadow-sm">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Registro de Temperaturas</h4>
                  <p className="text-sm text-slate-500">Equipos de refrigeración y congelación</p>
                </div>
              </div>
              <Link 
                href="/formatos/temperatura" 
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm shadow-orange-500/20 whitespace-nowrap text-center"
              >
                Llenar ahora
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/50 rounded-xl gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-white dark:bg-slate-800 p-2 rounded-lg shadow-sm">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Verificación de Plagas</h4>
                  <p className="text-sm text-slate-500">Revisión visual diaria</p>
                </div>
              </div>
              <Link 
                href="/formatos" 
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors shadow-sm shadow-orange-500/20 whitespace-nowrap text-center"
              >
                Llenar ahora
              </Link>
            </div>

          </div>
        </section>

        {/* Recent Activity */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-border/50 shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Actividad Reciente</h2>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border/50 bg-slate-50 dark:bg-slate-800/50 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">Registro Completado</div>
                  <time className="text-xs font-medium text-emerald-600">Hace 2 horas</time>
                </div>
                <div className="text-sm text-slate-500">Se completó el registro de "Recepción de materias primas".</div>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-100 dark:bg-blue-900/30 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <FileText className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-border/50 bg-slate-50 dark:bg-slate-800/50 shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-semibold text-slate-900 dark:text-white text-sm">Nuevo Anexo</div>
                  <time className="text-xs font-medium text-slate-500">Ayer</time>
                </div>
                <div className="text-sm text-slate-500">Se subió el certificado mensual de Aguas de Manizales.</div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
