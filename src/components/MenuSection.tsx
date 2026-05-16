"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const menuItems = [
  {
    title: "Truffle Risotto",
    description:
      "Arborio rice, wild mushrooms, fresh black truffle shavings, parmesan crisp.",
    price: "₹3200",
    image:
      "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Pan-Seared Scallops",
    description:
      "Diver scallops, cauliflower purée, crispy pancetta, micro greens.",
    price: "₹3800",
    image:
      "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?q=80&w=2940&auto=format&fit=crop",
  },
  {
    title: "Wagyu Beef Tenderloin",
    description: "Grade A5 Wagyu, roasted root vegetables, red wine reduction.",
    price: "₹6500",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2938&auto=format&fit=crop",
  },
];

export default function MenuSection({ name }: { name: string }) {
  return (
    <section className="py-24 px-4 bg-stone-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-stone-900 mb-4"
          >
            Signature Dishes at {name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-stone-600 text-lg max-w-2xl mx-auto font-light"
          >
            A glimpse into our chef's tasting menu, featuring seasonal
            ingredients and bold flavors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white border-stone-200 shadow-sm overflow-hidden group hover:border-stone-300 hover:shadow-md transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <CardTitle className="text-stone-900 text-xl">
                      {item.title}
                    </CardTitle>
                    <span className="text-amber-700 font-medium">
                      {item.price}
                    </span>
                  </div>
                  <CardDescription className="text-stone-600 font-light text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
