"use client";

import { motion } from "framer-motion";

export default function AboutSection({ name }: { name: string }) {
  return (
    <section className="py-24 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] w-full rounded-2xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2940&auto=format&fit=crop" 
            alt={`Interior of ${name}`}
            className="object-cover w-full h-full"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">
            The Story of {name}
          </h2>
          <div className="space-y-6 text-stone-600 text-lg font-light leading-relaxed">
            <p>
              Welcome to {name}, where culinary passion meets an elegant atmosphere. 
              Our journey began with a simple idea: to bring extraordinary flavors to our community 
              using only the finest, locally sourced ingredients.
            </p>
            <p>
              Every dish we serve is a testament to our dedication to the craft of cooking. 
              At {name}, we don't just serve food; we create memories that linger long after the last bite.
            </p>
            <p>
              Whether you're joining us for a casual lunch, a romantic dinner, or a special celebration, 
              our dedicated team is here to ensure your experience is nothing short of perfection.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
