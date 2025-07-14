import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CalButtonProps {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showArrow?: boolean;
  fullWidth?: boolean;
}

export default function CalButton({ size = "default", className = "", showArrow = false, fullWidth = false }: CalButtonProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"discovery"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <Button 
      data-cal-namespace="discovery"
      data-cal-link="calceum/discovery"
      data-cal-config='{"layout":"month_view"}'
      size={size}
      className={`bg-black hover:bg-gray-800 text-white rounded-lg ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      Get early access
      {showArrow && <ArrowRight className="ml-1 w-6 h-6 group-hover:translate-x-1 transition-transform" />}
    </Button>
  );
}