import ProductRecommendation from "@/components/ProductRecommendation";
import SkinCareTips from "@/components/SkinCareTips";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">Welcome to SkinGlow Shop ✨</h1>

      {/* Components */}
      <ProductRecommendation />
      <SkinCareTips />
    </div>
  );
}
