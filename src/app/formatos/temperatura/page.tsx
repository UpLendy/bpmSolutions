"use client";

import { useState } from "react";
import { ArrowLeft, Save, Thermometer, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

export default function RegistroTemperatura() {
  const [equipos, setEquipos] = useState([
    { id: 1, name: "Nevera Principal (Carnes)", temp: "", time: "08:00 AM" },
    { id: 2, name: "Congelador 1", temp: "", time: "08:00 AM" },
  ]);

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link 
        href="/formatos" 
        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver a formatos
      </Link>

      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <div className="bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 p-2 rounded-xl">
              <Thermometer className="w-6 h-6" />
            </div>
            Registro de Temperaturas
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Por favor, registre la temperatura actual de todos los equipos de refrigeración.
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-slate-500">Fecha de Registro</p>
          <p className="text-lg font-bold text-slate-900 dark:text-white">
            {new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </header>

      <form onSubmit={handleSave} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-border/50 overflow-hidden">
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border/50 text-slate-500 dark:text-slate-400 text-sm">
                <th className="pb-3 font-medium">Equipo</th>
                <th className="pb-3 font-medium">Hora</th>
                <th className="pb-3 font-medium">Temperatura (°C)</th>
                <th className="pb-3 font-medium text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {equipos.map((equipo) => (
                <tr key={equipo.id} className="group">
                  <td className="py-4">
                    <span className="font-medium text-slate-900 dark:text-white">{equipo.name}</span>
                  </td>
                  <td className="py-4">
                    <input 
                      type="time" 
                      defaultValue="08:00"
                      className="bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </td>
                  <td className="py-4">
                    <div className="relative w-32">
                      <input 
                        type="number" 
                        step="0.1"
                        placeholder="Ej: 4.5"
                        required
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-lg pl-3 pr-8 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      />
                      <span className="absolute right-3 top-2 text-slate-400 text-sm">°C</span>
                    </div>
                  </td>
                  <td className="py-4 text-right">
                    <button type="button" className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <button type="button" className="mt-4 flex items-center text-sm font-medium text-primary hover:text-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-1" /> Agregar Equipo
          </button>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 border-t border-border/50 flex items-center justify-between">
          <div className="text-sm text-slate-500">
            Asegúrese de que los valores sean exactos.
          </div>
          <button 
            type="submit"
            className="flex items-center gap-2 bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-sm shadow-primary/30"
          >
            {isSaved ? (
              <>
                Guardado con éxito
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Guardar Registro
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
