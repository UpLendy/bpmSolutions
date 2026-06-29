"use client";

import { Bug, ArrowLeft, Save, Info } from "lucide-react";
import Link from "next/link";

export default function FormatoPlagas() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("(Mock) Registro de control de plagas guardado exitosamente.");
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link 
        href="/formatos" 
        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-emerald-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver a Formatos
      </Link>

      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <div className="bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 p-2 rounded-xl">
              <Bug className="w-6 h-6" />
            </div>
            Control de Plagas
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Inspección visual diaria de las áreas de trabajo para garantizar la ausencia de plagas.
          </p>
        </div>
      </header>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-xl flex gap-3 text-blue-800 dark:text-blue-300">
        <Info className="w-5 h-5 shrink-0 mt-0.5" />
        <p className="text-sm">
          Recuerde revisar esquinas, debajo de los equipos y áreas de almacenamiento. Si marca "Sí" en algún avistamiento, debe registrar la acción correctiva.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-border/50 p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Fecha de Inspección</label>
            <input type="date" required defaultValue={new Date().toISOString().split('T')[0]} className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Hora</label>
            <input type="time" required className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all" />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-border pb-2">Lista de Chequeo de Áreas</h3>
          
          <div className="space-y-4">
            {['Área de Recepción', 'Almacén de Secos', 'Cuartos Fríos', 'Área de Preparación', 'Zona de Basuras'].map((area, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-border/50 gap-4">
                <span className="font-medium text-slate-700 dark:text-slate-300">{area}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-slate-500">¿Evidencia de plagas?</span>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name={`area-${idx}`} value="no" defaultChecked className="text-emerald-500 focus:ring-emerald-500" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">No</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name={`area-${idx}`} value="si" className="text-red-500 focus:ring-red-500" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">Sí</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Observaciones y/o Acciones Correctivas</label>
          <textarea 
            rows={3} 
            placeholder="Si hubo evidencia de plagas, describa qué encontró y qué acción tomó..."
            className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none" 
          />
        </div>

        <div className="pt-4 border-t border-border flex justify-end">
          <button 
            type="submit" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-sm shadow-emerald-500/30 flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Guardar Registro
          </button>
        </div>
      </form>
    </div>
  );
}
