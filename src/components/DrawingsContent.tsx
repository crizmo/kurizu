"use client";

import { useEffect, useState } from 'react';
import { RESUME_DATA } from "../data/resume-data";
import { DrawingCard } from "../components/drawing-card";
import { Button } from "../components/ui/button";
import { SunIcon, MoonIcon, ArrowLeftIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "../components/ui/dialog";
import Masonry from 'react-masonry-css';

export default function DrawingsContent({ navigate }: { navigate: (path: string) => void }) {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDrawing, setSelectedDrawing] = useState<{title: string, image: string} | null>(null);
  const [open, setOpen] = useState(false);

  const breakpointCols = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
    300: 1
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 p-2 bg-gray-800 text-white rounded-md dark:bg-gray-200 dark:text-gray-800 print:hidden"
      >
        {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
      </button>
      <Button variant="outline" className="fixed top-4 left-4 print:hidden" onClick={() => navigate('/')}>
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Back
      </Button>
      <section className="mx-auto w-full max-w-6xl space-y-8 bg-white dark:bg-gray-800 print:space-y-6 mt-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold dark:text-white">My Drawings</h1>
          <p className="text-pretty font-mono text-sm text-muted-foreground dark:text-gray-400 mt-2">
            A collection of my artwork and sketches.
          </p>
        </div>
        <Masonry
          breakpointCols={breakpointCols}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {RESUME_DATA.drawings.map((drawing) => (
            <div key={drawing.title} className="mb-4">
              <DrawingCard
                title={drawing.title}
                image={drawing.image}
                onClick={() => {
                  setSelectedDrawing(drawing);
                  setOpen(true);
                }}
              />
            </div>
          ))}
        </Masonry>
      </section>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          {selectedDrawing && (
            <img
              src={selectedDrawing.image}
              alt={selectedDrawing.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}