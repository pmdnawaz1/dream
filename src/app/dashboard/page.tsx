export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-zinc-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-red-500 text-xl font-bold">Dashboard</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
            Logout
          </button>
        </div>
      </nav>
      
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sample Dashboard Cards */}
          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-red-500 text-lg font-semibold mb-4">Statistics</h2>
            <p className="text-gray-300">Sample dashboard content</p>
          </div>
          
          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-red-500 text-lg font-semibold mb-4">Activities</h2>
            <p className="text-gray-300">Sample dashboard content</p>
          </div>
          
          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-red-500 text-lg font-semibold mb-4">Overview</h2>
            <p className="text-gray-300">Sample dashboard content</p>
          </div>
        </div>
      </main>
    </div>
  );
}
