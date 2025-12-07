interface ImagePlaceholderProps {
  caption: string;
  aspectRatio?: string;
  className?: string;
}

export default function ImagePlaceholder({ 
  caption, 
  aspectRatio = "16/9",
  className = "" 
}: ImagePlaceholderProps) {
  return (
    <div 
      className={`relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* Pattern background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Caption */}
        <p className="text-gray-400 text-sm max-w-xs">
          <span className="text-blue-400 font-medium">IMAGE:</span> {caption}
        </p>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-blue-500/30 rounded-tl-lg"></div>
      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-blue-500/30 rounded-tr-lg"></div>
      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg"></div>
      <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-blue-500/30 rounded-br-lg"></div>
    </div>
  );
}



