"use client";

import { Droplets, ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function FormatoAgua() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("(Mock) Registro de calidad de agua guardado exitosamente.");
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link 
        href="/formatos" 
        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver a Formatos
      </Link>

      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <div className="bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 p-2 rounded-xl">
              <Droplets className="w-6 h-6" />
            </div>
            Calidad del Agua
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Verificación de características organolépticas del agua (Color, Sabor, Olor).
          </p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-border/50 p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Fecha de Evaluación</label>
            <input type="date" required defaultValue={new Date().toISOString().split('T')[0]} className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Hora</label>
            <input type="time" required className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-border pb-2">Características Físicas</h3>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-border/50 gap-4">
              <span className="font-medium text-slate-700 dark:text-slate-300">Color</span>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="color" value="normal" defaultChecked className="text-blue-500 focus:ring-blue-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Incoloro (Normal)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="color" value="anormal" className="text-red-500 focus:ring-red-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Turbio/Anormal</span>
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-border/50 gap-4">
              <span className="font-medium text-slate-700 dark:text-slate-300">Olor</span>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="olor" value="normal" defaultChecked className="text-blue-500 focus:ring-blue-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Inodoro (Normal)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="olor" value="anormal" className="text-red-500 focus:ring-red-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Olor Extraño</span>
                </label>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-border/50 gap-4">
              <span className="font-medium text-slate-700 dark:text-slate-300">Sabor</span>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="sabor" value="normal" defaultChecked className="text-blue-500 focus:ring-blue-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Insípido (Normal)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="sabor" value="anormal" className="text-red-500 focus:ring-red-500" />
                  <span className="text-sm text-slate-700 dark:text-slate-300">Sabor Extraño</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Nivel de Cloro Residual (ppm) - Opcional</label>
          <input type="number" step="0.1" placeholder="Ej. 1.5" className="w-full md:w-1/2 bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
        </div>

        <div className="pt-4 border-t border-border flex justify-end">
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-sm shadow-blue-500/30 flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Guardar Registro
          </button>
        </div>
      </form>
    </div>
  );
}
