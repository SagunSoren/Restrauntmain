import { Separator } from "@/components/ui/separator";

export default function Footer({ name }: { name: string }) {
  return (
    <footer className="bg-stone-100 pt-16 pb-8 px-4 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-stone-900 mb-4">{name}</h3>
            <p className="text-stone-600 font-light max-w-sm">
              An extraordinary culinary journey awaits you. Join us for an
              unforgettable dining experience.
            </p>
          </div>

          <div>
            <h4 className="text-stone-900 font-medium mb-4">Location</h4>
            <address className="text-stone-600 font-light not-italic">
              Bistupur
              <br />
              Near New Maidan
              <br />
              Jamshedpur, Jharkhand - 831002
            </address>
          </div>

          <div>
            <h4 className="text-stone-900 font-medium mb-4">Hours</h4>
            <ul className="text-stone-600 font-light space-y-2">
              <li>Mon - Thu: 5pm - 10pm</li>
              <li>Fri - Sat: 5pm - 11pm</li>
              <li>Sunday: 4pm - 9pm</li>
            </ul>
          </div>
        </div>

        <Separator className="bg-stone-300 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-stone-500 text-sm font-light">
          <p>
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-stone-600">
            <a href="#" className="hover:text-stone-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-stone-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
