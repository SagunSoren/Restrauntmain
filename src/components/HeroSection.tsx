"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function HeroSection({ name }: { name: string }) {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  // Generate time slots (e.g., from 17:00 to 23:00)
  const timeSlots = [];
  for (let i = 17; i <= 22; i++) {
    timeSlots.push(`${i}:00`);
    timeSlots.push(`${i}:30`);
  }
  timeSlots.push("23:00");

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-stone-900/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-stone-200 mb-8 max-w-2xl mx-auto font-light"
        >
          Experience culinary excellence in an unforgettable atmosphere. Every dish is a masterpiece, crafted just for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
              <div className="bg-amber-700 text-white flex items-center justify-center hover:bg-amber-800 text-lg px-8 rounded-full h-14 cursor-pointer">
                Book a Table
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-center">Reservation</DialogTitle>
                <DialogDescription className="text-center text-base">
                  Book a Table
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2 text-left">
                  <label htmlFor="guests" className="text-sm font-medium leading-none">
                    Number of Guests
                  </label>
                  <Input id="guests" type="number" placeholder="2" min="1" max="20" />
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-sm font-medium leading-none mr-2">
                    Date
                  </label>
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 z-[100]">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}

                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2 text-left flex items-center">
                  <label className="text-sm font-medium leading-none mr-2">
                    Time
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent className="z-[100]">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 text-left">
                  <label htmlFor="purpose" className="text-sm font-medium leading-none">
                    Booking Purpose
                  </label>
                  <Textarea
                    id="purpose"
                    placeholder="e.g. Birthday, Anniversary, Business"
                    className="resize-none"
                  />
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <Button
                  className="w-full bg-amber-700 hover:bg-amber-800 py-6 text-white cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  Book Now
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-amber-900 text-lg px-8 rounded-full h-14 bg-transparent cursor-pointer">
            View Menu
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
