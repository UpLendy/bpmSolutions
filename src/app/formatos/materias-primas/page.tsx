"use client";

import { Box, ArrowLeft, Save, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FormatoMateriasPrimas() {
  const [items, setItems] = useState([1]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("(Mock) Registro de recepción guardado exitosamente.");
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link 
        href="/formatos" 
        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Volver a Formatos
      </Link>

      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <div className="bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 p-2 rounded-xl">
              <Box className="w-6 h-6" />
            </div>
            Recepción de Materias Primas
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Evaluación de los insumos al recibirlos del proveedor (temperatura, empaque, características).
          </p>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-border/50 p-6 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Fecha</label>
            <input type="date" required defaultValue={new Date().toISOString().split('T')[0]} className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Proveedor</label>
            <input type="text" required placeholder="Nombre del proveedor" className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Factura / Remisión</label>
            <input type="text" placeholder="Nro de factura" className="w-full bg-slate-50 dark:bg-slate-800 border border-border rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none transition-all" />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-border pb-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Productos Recibidos</h3>
          </div>
          
          <div className="space-y-4 overflow-x-auto pb-2">
            <div className="min-w-[800px]">
              <div className="grid grid-cols-12 gap-4 mb-2 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <div className="col-span-3">Producto</div>
                <div className="col-span-2">Lote/Venc.</div>
                <div className="col-span-2">Cant.</div>
                <div className="col-span-2">Temp (°C)</div>
                <div className="col-span-2">Empaque OK</div>
                <div className="col-span-1">Estado</div>
              </div>
              
              {items.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 items-center bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg border border-border/50 mb-2">
                  <div className="col-span-3">
                    <input type="text" required placeholder="Ej: Pechuga de pollo" className="w-full bg-white dark:bg-slate-900 border border-border rounded px-2 py-1.5 text-sm outline-none" />
                  </div>
                  <div className="col-span-2">
                    <input type="text" placeholder="Lote/Fecha" className="w-full bg-white dark:bg-slate-900 border border-border rounded px-2 py-1.5 text-sm outline-none" />
                  </div>
                  <div className="col-span-2">
                    <input type="text" required placeholder="Ej: 5 Kg" className="w-full bg-white dark:bg-slate-900 border border-border rounded px-2 py-1.5 text-sm outline-none" />
                  </div>
                  <div className="col-span-2">
                    <input type="number" step="0.1" placeholder="Ej: 4.0" className="w-full bg-white dark:bg-slate-900 border border-border rounded px-2 py-1.5 text-sm outline-none" />
                  </div>
                  <div className="col-span-2 text-center">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500 cursor-pointer" />
                  </div>
                  <div className="col-span-1">
                    <select className="w-full bg-white dark:bg-slate-900 border border-border rounded px-1 py-1.5 text-sm outline-none">
                      <option value="ok">✔️</option>
                      <option value="rechazado">❌</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              type="button" 
              onClick={() => setItems([...items, items.length + 1])}
              className="mt-2 flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors px-2 py-1 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-md"
            >
              <Plus className="w-4 h-4" />
              Añadir Producto
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-border flex justify-end">
          <button 
            type="submit" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-sm shadow-purple-500/30 flex items-center gap-2"
          >
            <Save className="w-5 h-5" />
            Guardar Recepción
          </button>
        </div>
      </form>
    </div>
  );
}
