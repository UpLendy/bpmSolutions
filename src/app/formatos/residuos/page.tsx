"use client";

import { Trash2, ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function FormatoResiduos() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("(Mock) Registro de residuos guardado exitosamente.");
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link 
        href="/formatos" 
        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver a Formatos
      </Link>

      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <div className="bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300 p-2 rounded-xl">
              <Trash2 className="w-6 h-6" />
            </div>
            Residuos Sólidos y Líquidos
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Cuantificación de los residuos generados al final del turno.
          </p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-border/50 p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Fecha de Cuantificación</label>
            <input type="date" required defaultValue={new Date().toISOString().split('T')[0]} className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-slate-500 outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Turno</label>
            <select required className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-slate-500 outline-none transition-all appearance-none">
              <option value="">Seleccionar turno...</option>
              <option value="manana">Mañana</option>
              <option value="tarde">Tarde</option>
              <option value="noche">Noche</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-border pb-2">Cantidades (Bolsas/Kilos)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Residuos Orgánicos (Verde)</label>
              <div className="flex gap-2">
                <input type="number" placeholder="Cantidad" required className="flex-1 bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-slate-500 outline-none transition-all" />
                <select className="bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-500 outline-none">
                  <option>Bolsas</option>
                  <option>Kg</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Residuos Aprovechables (Blanco)</label>
              <div className="flex gap-2">
                <input type="number" placeholder="Cantidad" required className="flex-1 bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-slate-500 outline-none transition-all" />
                <select className="bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-500 outline-none">
                  <option>Bolsas</option>
                  <option>Kg</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Residuos No Aprovechables (Negro)</label>
              <div className="flex gap-2">
                <input type="number" placeholder="Cantidad" required className="flex-1 bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-slate-500 outline-none transition-all" />
                <select className="bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-slate-500 outline-none">
                  <option>Bolsas</option>
                  <option>Kg</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Aceite Usado (Litros)</label>
              <div className="flex gap-2">
                <input type="number" placeholder="0" className="flex-1 bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-slate-500 outline-none transition-all" />
                <div className="bg-slate-100 dark:bg-slate-800 border border-border rounded-lg px-3 py-2 text-sm text-slate-500 flex items-center">
                  L
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Encargado de Disposición</label>
          <input type="text" required placeholder="Nombre del responsable..." className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-slate-500 outline-none transition-all" />
        </div>

        <div className="pt-4 border-t border-border flex justify-end">
          <button 
            type="submit" 
            className="bg-slate-800 hover:bg-slate-900 dark:bg-slate-200 dark:hover:bg-white dark:text-slate-900 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Guardar Registro
          </button>
        </div>
      </form>
    </div>
  );
}
