import ImageSlider from "@/components/ImageSlider";
import { serverFunction } from "@/utils/server-utils";

export default function ServerRoute() {
  const result = serverFunction();

  return (
    <div>
      <h1>Server Route</h1>
      <p>{result}</p>

      <ImageSlider />
    </div>
  );
}
