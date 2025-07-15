"use client";

import useLocalStorage from "../hooks/useLocalStorage";

const page = () => {
  const [departments, setDepartments] = useLocalStorage("departments", []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    setDepartments((prev) => [...prev, data]);
    e.target.reset();
  };

  return (
    <div className="p-4 border border-gray-300 shadow-md rounded-md">
      <h1 className="text-2xl font-bold border-b border-gray-300 mb-4 p-2">
        Crear Inventario
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-row gap-4 items-center">
          <label htmlFor="id">Código:</label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="Enter department ID"
            required
            className="border-gray-300 border p-2 rounded w-full"
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label htmlFor="dept">Departamento:</label>
          <select
            type="text"
            id="dept"
            name="dept"
            placeholder="Enter department ID"
            required
            className="border-gray-300 border p-2 rounded w-full"
          >
            <option value="">Seleccione un departamento</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept.id}>
                {dept.description}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter department description"
            required
            className="border-gray-300 border p-2 rounded w-full"
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label htmlFor="details">Detalles:</label>
          <input
            type="text"
            id="details"
            name="details"
            placeholder="Enter department details"
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-600 transition-colors cursor-pointer"
          >
            Crear
          </button>
          <button
            type="submit"
            className="bg-slate-500 text-white p-2 rounded shadow hover:bg-slate-600 transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              e.target.form.reset();
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
      <div className="mt-8">
        <h2 className="text-xl font-bold border-b border-gray-300 p-2">
          Lista de Departamentos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {departments.length === 0 && (
            <p className="text-gray-500">No hay departamentos creados.</p>
          )}
          {departments.map((dept, index) => (
            <div
              key={index}
              className="border border-gray-300 p-4 rounded-md shadow-md"
            >
              <h3 className="font-bold">{dept.id}</h3>
              <p>Descripción: {dept.description}</p>
              <p>Detalles: {dept.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
