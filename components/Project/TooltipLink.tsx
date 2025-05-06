import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipLinkProps } from "@/types/project";

function TooltipLink({ href, icon, label }: TooltipLinkProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            className="w-[40px] h-[40px] rounded-full bg-slate-200 shadow-md flex justify-center items-center group focus:scale-110 hover:scale-110 active:scale-105 transition"
          >
            {icon}
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default TooltipLink;
