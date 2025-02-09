import Sidebar from "./sidebar";

export default function Home() {
  return (
    <main className="flex flex-row h-screen w-screen max-h-screen max-w-screen">
      <Sidebar />
      <div className="flex flex-col w-full"></div>
    </main>
  );
}
