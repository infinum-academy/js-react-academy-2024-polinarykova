import { fetcher } from "@/app/fetchers/fetcher";
import { swrKeys } from "@/app/fetchers/swrKeys";
import { IShow, IShowList } from "@/typings/show";
import { ReactNode, createContext, useState } from "react";
import useSWR from "swr";

interface IShowPickerContext {
  currentStep: number;
  setCurrentStep: (newStep: number) => void;
  showList?: IShowList;
  selectedShows: Array<IShow>;
  setSelectedShows: (newShowList: Array<IShow>) => void;
}

export const ShowPickerContext = createContext<IShowPickerContext>(
  {} as IShowPickerContext
);

interface IShowPickerContextProviderProps {
  children: ReactNode;
}

export default function ShowPickerContextProvider({
  children,
}: IShowPickerContextProviderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedShows, setSelectedShows] = useState<Array<IShow>>([]);
  const { data: showList } = useSWR<IShowList>(
    swrKeys.shows,
    fetcher<IShowList>
  );
  return (
    <ShowPickerContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        showList,
        selectedShows,
        setSelectedShows,
      }}
    >
      {children}
    </ShowPickerContext.Provider>
  );
}
