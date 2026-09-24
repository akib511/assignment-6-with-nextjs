"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Workout } from "@/types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];

  completedIds: number[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;

  toggleCompleted: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

interface FitLogProviderProps {
  children: ReactNode;
}

export const FitLogProvider = ({ children }: FitLogProviderProps) => {
  const [plan, setPlan] = useState<Workout[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const storedPlan = localStorage.getItem("fitlog-plan");

    if (!storedPlan) {
      return [];
    }

    try {
      const data = JSON.parse(storedPlan);
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });

  const [saved, setSaved] = useState<Workout[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const storedSaved = localStorage.getItem("fitlog-saved");

    if (!storedSaved) {
      return [];
    }

    try {
      const data = JSON.parse(storedSaved);
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });

  const [completedIds, setCompletedIds] = useState<number[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const storedCompleted = localStorage.getItem("fitlog-completed");

    if (!storedCompleted) {
      return [];
    }

    try {
      const data = JSON.parse(storedCompleted);
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("fitlog-plan", JSON.stringify(plan));
  }, [plan]);

  useEffect(() => {
    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem("fitlog-completed", JSON.stringify(completedIds));
  }, [completedIds]);

  const addToPlan = (workout: Workout) => {
    setPlan((currentPlan) => {
      const alreadyExists = currentPlan.some((item) => item.id === workout.id);

      if (alreadyExists) {
        return currentPlan;
      }

      return [...currentPlan, workout];
    });
  };

  const removeFromPlan = (id: number) => {
    setPlan((currentPlan) => currentPlan.filter((item) => item.id !== id));

    // Also remove completed status
    setCompletedIds((currentIds) =>
      currentIds.filter((itemId) => itemId !== id),
    );
  };

  const saveWorkout = (workout: Workout) => {
    setSaved((currentSaved) => {
      const alreadyExists = currentSaved.some((item) => item.id === workout.id);

      if (alreadyExists) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  };

  const removeFromSaved = (id: number) => {
    setSaved((currentSaved) => currentSaved.filter((item) => item.id !== id));
  };

  const toggleCompleted = (id: number) => {
    setCompletedIds((currentIds) => {
      const alreadyCompleted = currentIds.includes(id);

      if (alreadyCompleted) {
        return currentIds.filter((itemId) => itemId !== id);
      }

      return [...currentIds, id];
    });
  };

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        completedIds,

        addToPlan,
        removeFromPlan,

        saveWorkout,
        removeFromSaved,

        toggleCompleted,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error("useFitLog must be used inside FitLogProvider");
  }

  return context;
};
