import { useEffect, useState } from 'react';

type Props = {
  progress?: number;
};

const Spinner = ({ progress = 0 }: Props) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setHide(true);
      }, 100);
    }
  }, [progress]);

  if (hide) {
    return null;
  }

  return (
    <div className="bg-opacity-60 fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-20 w-20 animate-spin rounded-full border-2 border-t-8 border-black border-t-transparent"></div>
        </div>
        <div className="text-l absolute inset-0 flex items-center justify-center font-bold">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default Spinner;
