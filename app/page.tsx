import Charts from "@/components/Charts";
import MyMap from "@/components/MyMap";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span className="w-full">
        <h1 className="text-6xl">Water and Sanitation Service Requests</h1>
        <div className=" flex-col w-full h-1/2 items-center ">
          <Charts />
          <MyMap />
        </div>
      </span>
    </main>
  );
}
