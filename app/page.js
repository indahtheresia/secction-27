import UsePromisesDemo from "@/components/UsePromisesDemo";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<p>Loading users...</p>}>
        <UsePromisesDemo />
      </Suspense>
    </main>
  );
}
