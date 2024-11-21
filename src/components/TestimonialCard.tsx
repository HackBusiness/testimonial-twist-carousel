import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  author: string;
  handle: string;
  content: string;
  image?: string;
  className?: string;
}

export function TestimonialCard({
  author,
  handle,
  content,
  image,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-lg border border-testimonial-border bg-testimonial-background p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <Avatar className="h-10 w-10">
          <img
            src={image || "https://github.com/shadcn.png"}
            alt={author}
            className="aspect-square h-full w-full"
          />
        </Avatar>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-gray-200">{author}</h3>
            <span className="text-sm text-gray-400">{handle}</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">{content}</p>
        </div>
      </div>
    </div>
  );
}