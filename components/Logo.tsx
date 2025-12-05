import Image from 'next/image';

interface LogoProps {
  variant?: 'full' | 'icon' | 'vertical';
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ variant = 'full', className = '', width, height }: LogoProps) {
  const logoSrc = variant === 'full' ? '/logo-full.svg' : variant === 'icon' ? '/logo-icon.svg' : '/logo-vertical.svg';
  
  const defaultDimensions = {
    full: { width: 140, height: 30 },
    icon: { width: 24, height: 30 },
    vertical: { width: 100, height: 70 }
  };

  const dimensions = {
    width: width || defaultDimensions[variant].width,
    height: height || defaultDimensions[variant].height
  };

  return (
    <Image
      src={logoSrc}
      alt="Engineering Intelligence"
      width={dimensions.width}
      height={dimensions.height}
      className={className}
      priority
    />
  );
}
