"use client";

const page = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold my-5">Departamentos</h1>

      <form className="flex flex-col gap-4 ">
        <div className="flex flex-row gap-4 items-center">
          <label htmlFor="id">Código:</label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="Enter department ID"
            required
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label htmlFor="description">Descripción:</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter department description"
            required
            className="border p-2 rounded w-full"
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
            className="border p-2 rounded w-full"
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
    </div>
  );
};

export default page;
