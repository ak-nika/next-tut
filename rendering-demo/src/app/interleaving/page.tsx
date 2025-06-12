import { ServerComponentOne } from "@/components/ServerComponentOne";
import { ServerComponentTwo } from "@/components/ServerComponentTwo";

export default function InterleavingPage() {
  return (
    <div>
      <h1>Interleaving Page</h1>
      <ServerComponentOne />
      <ServerComponentTwo />
    </div>
  );
}
