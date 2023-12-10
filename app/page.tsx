import Charts from "@/components/Charts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="w-full">
        <h1 className="text-4xl">Data Visualisation</h1>
        <div className="w-full h-1/2">
          {" "}
          <Charts />
        </div>
      </span>
    </main>
  );
}
