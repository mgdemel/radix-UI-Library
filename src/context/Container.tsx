"use client";
import React, {
  createContext,
  useContext,
  useRef,
  MutableRefObject,
  ReactNode
} from "react";

type ContainerRefType = MutableRefObject<HTMLDivElement | null> | null;

const ContainerContext = createContext<ContainerRefType>(null);

// Custom hook to use the context
export const useContainer = (): ContainerRefType =>
  useContext(ContainerContext);

// Provider component
interface ContainerProviderProps {
  children: ReactNode;
}

export const ContainerProvider: React.FC<ContainerProviderProps> = ({
  children
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <ContainerContext.Provider value={containerRef}>
      <div ref={containerRef} className="container">
        {children}
      </div>
    </ContainerContext.Provider>
  );
};
