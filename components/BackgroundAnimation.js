export default function BackgroundAnimation() {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-32 h-32 bg-primary opacity-10 rounded-full blur-3xl top-10 left-20 animate-pulse"></div>
        <div className="absolute w-24 h-24 bg-primary opacity-15 rounded-full blur-2xl bottom-10 right-20 animate-pulse"></div>
        <div className="absolute w-28 h-28 bg-primary opacity-10 rounded-full blur-3xl bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>
    );
  }
  